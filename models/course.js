const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide name'],
        },
        numberOfHours: {
            type: String,
            required: [true, 'Please provide numberOfHours'],
        },
        student:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: [true, 'Please provide Student'],
        }],
        prof:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Prof",
            required: [true, 'Please provide Prof'],
        }]
        
    },
   
);

module.exports = mongoose.model('Course', courseSchema);