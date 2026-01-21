const Attendance = require('../models/Attendance');
const Employee = require('../models/Employee');

exports.markAttendance = async (req, res) => {
  const { employeeId, status } = req.body;
  const today = new Date().setHours(0, 0, 0, 0);

  try {
    let record = await Attendance.findOne({
      employeeId,
      date: today
    });

    if (record) {
      return res.status(400).json({ message: 'Attendance already marked today' });
    }

    record = new Attendance({
      employeeId,
      date: today,
      status: status || 'present',
      checkIn: new Date()
    });

    await record.save();
    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTodayAttendance = async (req, res) => {
  const today = new Date().setHours(0, 0, 0, 0);

  try {
    const records = await Attendance.find({ date: today })
      .populate('employeeId', 'name email role');
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};