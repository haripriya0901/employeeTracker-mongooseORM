const express = require('express');
const router = express.Router();
const empController = require('../controllers/empController');

router.get('/', empController.getAllEmployees);
router.post('/', empController.createEmployee);
// Get an employee by ID
router.get('/:id', empController.getEmployeeById);
// Delete an employee
router.delete('/:id', empController.deleteEmployee);
// Update an employee
router.put('/:id', empController.updateEmployee);
// Partially update an employee
router.patch('/:id', empController.updateEmployeeByPatch);


module.exports = router;