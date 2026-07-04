const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createAppointment,
  getMyBookings,
  getBusinessBookings,
  updateAppointmentStatus,
} = require("../controllers/appointmentController");

router.post("/", protect, createAppointment);
router.get("/my-bookings", protect, getMyBookings);
router.get("/business-bookings", protect, getBusinessBookings);
router.put("/:id/status", protect, updateAppointmentStatus);

module.exports = router;