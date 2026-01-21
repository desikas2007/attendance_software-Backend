// models/Attendance.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  date: {
    type: Date,
    required: true,
    index: true // better performance for daily queries
  },
  checkIn: {
    type: Date,
    default: null
  },
  checkOut: {
    type: Date,
    default: null
  },
  status: {
    type: String,
    enum: ['present', 'late', 'absent', 'half-day'],
    default: 'absent'
  },
  remarks: {
    type: String,
    trim: true,
    maxlength: 200
  }
}, {
  timestamps: true
});

// Compound index for faster queries by employee + date
attendanceSchema.index({ employeeId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('Attendance', attendanceSchema);