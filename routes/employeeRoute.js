// src/routes/employeeRoute.js
const express = require('express');
const {
    getEmployees,
    getEmployeeById,
    addEmployee,
    editEmployee,
    deleteEmployee
} = require('../controllers/employeeController');

const router = express.Router();

// Employee routes
router.get('/', getEmployees);
router.get('/:id', getEmployeeById);
router.post('/add', addEmployee);
router.put('/edit/:id', editEmployee);
router.get('/delete/:id', deleteEmployee);

module.exports = router;
