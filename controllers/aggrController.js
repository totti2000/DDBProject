const Aggregation = require('../models/aggregation');


addAggregation = function (req, res, next) {
    const aggr = new Aggregation({
        aggregation: req.body.aggregation,
        Hours: req.body.Hours,
    });
    aggr.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'aggregation Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'aggregation Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}


 addField = async (req, res) => {
    const aggHour = await Aggregation.aggregate([
        {
        $addFields: {
            totalHour: { $sum: "$Hours" },
        },
        }
    ]);
    res.status(200).json({  aggHour });
};


 group = async (req, res) => {
    const aggHour = await Aggregation.aggregate( [
        {
          $group: {
             _id: null,
             count: { $sum: 1 }
          }
        }
    ])
    res.status(200).json({  aggHour });
};

 unwind = async (req, res) => {
    const aggHour = await Aggregation.aggregate( [ { $unwind : "$Hours" } ] )
    res.status(200).json({  aggHour });
};

 match = async (req, res) => {
    const aggHour = await Aggregation.aggregate([ 
        { 
            $match : { Hours : { $lt: 10} } 
        }
    ])
    res.status(200).json({  aggHour });
};

module.exports = {
    addAggregation: addAggregation,
    addField:addField,
    group:group,
    unwind:unwind,
    match:match
}