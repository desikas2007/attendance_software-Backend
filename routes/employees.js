 // routes/employees.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employeeController');

// All employee routes are protected
router.use(auth);

router.route('/')
  .get(getAllEmployees)
  .post(createEmployee);

router.route('/:id')
  .get(getEmployeeById)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;