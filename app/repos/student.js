
const studentModel = require('../models/student');


let create = (student) => {
    return studentModel.create(student);
}

let get = _ => {
    return studentModel.find();
}

let find = (studentId) => {
    return studentModel.findById(studentId);
}

let update = (studentId, student) => {
    return studentModel.findOneAndUpdate({"id": studentId}, student);
}

let remove = (studentId) => {
    return studentModel.deleteOne({"id": studentId});
}

module.exports = {
    create: create,
    find: find,
    update: update,
    remove: remove
};