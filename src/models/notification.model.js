// models/notification.model.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
  type: { type: String, enum: ['email', 'whatsapp'] },
  status: { type: String, enum: ['pending', 'sent', 'failed'], default: 'pending' },
  sentAt: Date,
  message: String
});

module.exports = mongoose.model('Notification', notificationSchema);
