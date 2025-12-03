// models/schedule.model.js
const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  day: { 
    type: String, 
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 
    required: true 
  },
  open: { type: String, required: true },   // formato "09:00"
  close: { type: String, required: true },  // formato "18:00"
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
