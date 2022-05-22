const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide name'],
        },
        address: {
            type: String,
            required: [true, 'Please provide address'],
        },
        mobile:{
            type: String,
            required: [true, 'Please provide mobile'],
        },
        course:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: [true, 'Please provide Course'],
        }]
        
    },
   
);

module.exports = mongoose.model('Student', studentSchema);