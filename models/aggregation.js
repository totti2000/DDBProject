const mongoose = require('mongoose');

const aggrSchema = new mongoose.Schema(
    {
        aggregation: {
            type: String,
            required: [true, 'Please provide aggregation'],
        },
        Hours:[],
        
        
    },
   
);

module.exports = mongoose.model('Aggregation', aggrSchema);