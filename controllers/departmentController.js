const Department = require('../models/departModel');


exports.getAllDepartments = async(req, res)=>{
    try{
        const allDepartments = await Department.find();
        res.json(allDepartments);

    }catch(err){
        res.status(500).json({ message : err.message})
    }
};

exports.createDepartment = async(req,res)=>{
    
        const createDep = new Department({
            name :req.body.name,
            company: req.body.company

        });
    try{
        const dep = await createDep.save();
        res.status(201).json(dep);
    }catch(err){
        res.status(400).json({ message: err.message});
    }
};

exports.deleteDepartment = async(req, res) =>{
    try{
        await Department.findByIdAndDelete(req.params.id);
        res.json({id: req.params.id});
    } catch(err){
        console.log(err);
        res.status(500).send("Error in Deleting Department")
        
    }
};


exports.updateDepartment = async(req, res)=>{
    try{
        await Department.findByIdAndUpdate(req.params.id, req.body);
        res.json({ id: req.params.id});
    } catch(err){
        console.error(err);
        res.status(500).send("Error in updating Department")
        
    }
};


exports.updateDepartmentByPatch = async(req,res) =>{
    try {
        await Department.findByIdAndUpdate(req.params.id, req.body);
        res.json({ id: req.params.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Updating Department');
    }
};