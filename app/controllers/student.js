
const studentRepo = require('../repos/student');

let addStudent = (req, res) => {
    studentRepo
        .create(req.body)
        .then(_ => {
            console.log("Estudiante creado");
            return res.status(201).send({"mensaje": "El estudiante fue creado exitosamente"});
        })
        .catch(e => {
            console.log("Error al crear estudiante" + e);
            return res.send({"mensaje": "No fue posible crear el estudiante."});
        })
}

let findAllStudents = (_, res) => {
    studentRepo
        .get()
        .then(_ => { return res.send(res) })
        .catch(e => {
            console.log("Error al crear estudiante" + e);
            return res.send({"mensaje": "No fue posible encontrar la colección de estudiantes."});
        })
}

let findStudent = (req, res) => {
    studentRepo
        .find(req.params.id)
        .then(_ => { return res.send(res) })
        .catch(e => {
            console.log("Error al crear estudiante" + e);
            return res.send({"mensaje": "No fue posible encontrar el estudiante."});
        })
}

let updateStudent = (req, res) => {
    studentRepo
        .update(req.params.id, req.body)
        .then(_ => { return res.send({"mensaje": "La información del estudiante fue actualizado exitosamente"})})
        .catch(e => {
            console.log("Error al crear estudiante" + e);
            return res.send({"mensaje": "No fue posible actualizar el estudiante."});
        })
}

let updateStudent = (req, res) => {
    studentRepo
        .update(req.params.id, req.body)
        .then(_ => { return res.send({"mensaje": "La información del estudiante fue actualizado exitosamente"})})
        .catch(e => {
            console.log("Error al crear estudiante" + e);
            return res.send({"mensaje": "No fue posible actualizar el estudiante."});
        })
}

let removeStudent = async (req, res) => {
    try {
        var result = studentRepo.remove(req.params.id)
        return res.send({"mensaje": "La información del estudiante fue eliminada exitosamente"});
    } catch (error) {
        return res.send({"mensaje": "No fue posible eliminar la información del estudiante."})
    }
}

module.exports = {
    add: addStudent,
    findAll: findAllStudents,
    findOne: findStudent,
    updateOne: updateStudent,
    removeOne: removeStudent
};