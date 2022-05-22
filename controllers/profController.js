const Prof = require('../models/prof');


addProf = function (req, res, next) {
    const prof = new Prof({
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile,
        course: req.body.course
    });
    prof.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Prof Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Prof Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}



getProf = function (req, res, next) {
    Prof.find().
        then(resault => {
            res.status(200).json({
                massage: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}




module.exports = {
    addProf: addProf,
    getProf:getProf

}