const mongoose = require('mongoose');

const profSchema = new mongoose.Schema(
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
        }
        
    },
   
);

module.exports = mongoose.model('Prof', profSchema);