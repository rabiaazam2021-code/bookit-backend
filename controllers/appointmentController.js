const Appointment = require("../models/Appointment");

const createAppointment = async (req, res) => {
  try {
    const { business, service, date, time } = req.body;

    const existingBooking = await Appointment.findOne({
      business,
      date,
      time,
      status: { $ne: "Cancelled" },
    });

    if (existingBooking) {
      return res.status(400).json({ message: "This time slot is already booked" });
    }

    const appointment = await Appointment.create({
      customer: req.user._id,
      business,
      service,
      date,
      time,
    });

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const appointments = await Appointment.find({ customer: req.user._id })
      .populate("business", "name")
      .populate("service", "name price")
      .sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBusinessBookings = async (req, res) => {
  try {
    const appointments = await Appointment.find({ business: req.user._id })
      .populate("customer", "name email")
      .populate("service", "name price")
      .sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    if (appointment.business.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    appointment.status = status;
    await appointment.save();
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createAppointment, getMyBookings, getBusinessBookings, updateAppointmentStatus };