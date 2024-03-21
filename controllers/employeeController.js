const { Employee } = require('../models/index.js');

// Controller functions for handling employee-related routes

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).send( { employees });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.status(200).send( { employee });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const addEmployee = async (req, res) => {
    const { name } = req.body;
    try {
        const existingEmployee = await Employee.findOne({ where: { name } });   
        if (existingEmployee) {
            return res.status(400).send('Employee already exists');
        }
        const newEmployee = await Employee.create({ name });
        res.status(201).send('Employee created successfully')
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
};

const editEmployee = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        await employee.update({ name });
        res.status(200).send('Employee updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        await employee.destroy();
        res.status(200).send('Employee deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getEmployees,
    getEmployeeById,
    addEmployee,
    editEmployee,
    deleteEmployee,
};
