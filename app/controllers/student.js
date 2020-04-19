
const studentRepo = require('../repos/student');

let addStudent = async (req, res) => {
    studentRepo
        .create(req.body)
        .then(s => {
            console.log(req);
            console.log("Estudiante creado");
            return res.send({"mensaje": "ok"})

        })
        .catch(e => {
            console.log("Error al crear estudiante" + e);
            return res.send({"mensaje": "F"})
        })
}

module.exports = {
    add: addStudent
};