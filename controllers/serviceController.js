const Service = require("../models/Service");

const createService = async (req, res) => {
  try {
    const { name, duration, price } = req.body;
    const service = await Service.create({
      business: req.user._id,
      name,
      duration,
      price,
    });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyServices = async (req, res) => {
  try {
    const services = await Service.find({ business: req.user._id });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBusinessesWithServices = async (req, res) => {
  try {
    const services = await Service.find().populate("business", "name email");
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    if (service.business.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }
    await service.deleteOne();
    res.json({ message: "Service removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createService, getMyServices, getAllBusinessesWithServices, deleteService };