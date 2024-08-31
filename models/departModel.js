const mongoose = require('mongoose');


const departmentSchema = new mongoose.Schema({
     name:{
        type: String,
        required: true
     },

     company:{
        type:String,
        required:true
     }



    // name: String,

    // company: String,
}, { timestamps: true });

module.exports = mongoose.model('Department', departmentSchema);