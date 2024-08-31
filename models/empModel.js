const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    empName: {
        type: String,
        required: true
    },

    empDob: {
        type: String,
        required: true
    },

    empDesignation:{
        type:String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    
});

module.exports =mongoose.model('Emp', empSchema);
