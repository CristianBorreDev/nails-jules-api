const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", AppointmentSchema);
