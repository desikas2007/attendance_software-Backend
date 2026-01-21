// routes/attendance.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  markAttendance,
  getTodayAttendance,
  getAttendanceByEmployee,
  updateAttendance
} = require('../controllers/attendanceController');

// All attendance routes are protected
router.use(auth);

router.post('/mark', markAttendance);                    // Mark present/late
router.get('/today', getTodayAttendance);                // Today's records
router.get('/employee/:employeeId', getAttendanceByEmployee); // All records for one employee
router.put('/:id', updateAttendance);                    // Update check-out or status

module.exports = router;