const Student = require('../models/Student');


addStudents = function (req, res, next) {
    const student = new Student({
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile,
        course: req.body.course
    });
    student.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'student Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Student Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}





getStudents = function (req, res, next) {
    Student.find().
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


updateStudents = function (req, res, next) {
    const newStudent = {
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile
    }
    Student.findByIdAndUpdate({ _id: req.params.id }, { $set: newStudent }).
        then(resault => {
            res.status(200).json({
                massage: 'Student updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}


deleteStudents = function (req, res, next) {
    Student.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Student deleted Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

module.exports = {
    addStudents: addStudents,
    getStudents:getStudents,
    updateStudents:updateStudents,
    deleteStudents:deleteStudents
    
    
}