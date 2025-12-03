const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/appointments.controller");

router.post("/", ctrl.createAppointment);
router.get("/", ctrl.getAppointments);

module.exports = router;
