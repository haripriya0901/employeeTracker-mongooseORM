const Emp = require('../models/empModel');

exports.getAllEmployees = async (req, res) =>{
    try{
        const allEmployees = await Emp.find();
        res.json(allEmployees);
    }catch(err){
        res.status(500).json({ message : err.message})
    }
};

exports.createEmployee = async(req, res)=>{
    const employee = new Emp({
        empName : req.body.empName,
        empDob: req.body.empDob,
        empDesignation: req.body.empDesignation,
        department:req.body.department
    });

    try{
        const newEmp = await employee.save();
        res.status(201).json(newEmp);
    }catch(err){
        res.status(400).json({ message: err.message});
    }
};
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Emp.findById(req.params.id);
        res.json(employee);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Retrieving Employee');
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        await Emp.findByIdAndDelete(req.params.id);
        res.json({ id: req.params.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Deleting Employee');
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        await Emp.findByIdAndUpdate(req.params.id, req.body);
        res.json({ id: req.params.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Updating Employee');
    }
}

exports.updateEmployeeByPatch = async (req, res) => {
    try {
        await Emp.findByIdAndUpdate(req.params.id, req.body);
        res.json({ id: req.params.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Updating Employee');
    }
}