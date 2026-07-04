const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createService,
  getMyServices,
  getAllBusinessesWithServices,
  deleteService,
} = require("../controllers/serviceController");

router.post("/", protect, createService);
router.get("/my-services", protect, getMyServices);
router.get("/all", getAllBusinessesWithServices);
router.delete("/:id", protect, deleteService);

module.exports = router;