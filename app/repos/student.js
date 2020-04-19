
const studentModel = require('../models/student');

let create = (student) => {
    return studentModel.create(student);
}

let get = _ => {
    return studentModel.find({}).select({__v: 0, _id: 0});
}

let find = (studentId) => {
    return studentModel.findOne({"id": studentId}).select({__v: 0, _id: 0});
}

let update = (studentId, student) => {
    return studentModel.findOneAndUpdate({"id": studentId}, student).select({__v: 0, _id: 0});
}

let remove = (studentId) => {
    return studentModel.deleteOne({"id": studentId});
}

module.exports = {
    create: create,
    get: get,
    find: find,
    update: update,
    remove: remove
};