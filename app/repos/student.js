
const studentModel = require('../models/student');

let createStudent = (student) => {
    return studentModel.create(student);
}

module.exports = {
    create: createStudent
};