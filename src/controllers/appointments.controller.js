const Appointment = require("../models/appointment.model");

exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.json({ ok: true, appointment });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
};
