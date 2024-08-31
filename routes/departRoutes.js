const express = require('express');

const router = express.Router();
const depController = require('../controllers/departmentController');

router.get('/', depController.getAllDepartments);
router.post('/',depController.createDepartment);
router.delete('/:id',depController.deleteDepartment);
router.put('/:id',depController.updateDepartment);
router.patch('/:id',depController.updateDepartmentByPatch);
module.exports = router;
