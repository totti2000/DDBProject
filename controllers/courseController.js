const Course = require('../models/course');


addCources = function (req, res, next) {
    const course = new Course({
        name: req.body.name,
        numberOfHours: req.body.numberOfHours,
        student: req.body.student,
        prof: req.body.prof,
    });
    course.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Course Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Course Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}



getCourses = function (req, res, next) {
    Course.find().
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


updateCoursess = function (req, res, next) {
    const newCourse = {
        name: req.body.name,
        numberOfHours: req.body.numberOfHours,
        student: req.body.student
    }
    Course.findByIdAndUpdate({ _id: req.params.id }, { $set: newCourse }).
        then(resault => {
            res.status(200).json({
                massage: 'Course updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}


deleteCourses = function (req, res, next) {
    Course.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Course deleted Successfully',
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
    addCources: addCources,
    getCourses:getCourses,
    updateCoursess:updateCoursess,
    deleteCourses:deleteCourses
    
}