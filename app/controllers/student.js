
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
        .then(data => {
            return res.send({
                "data": data,
                "length": data.length
            });
        })
        .catch(e => {
            console.log("Error al crear estudiante" + e);
            return res.send({"mensaje": "No fue posible encontrar la colección de estudiantes."});
        })
}

let findStudent = (req, res) => {
    studentRepo
        .find(req.params.id)
        .then(data => {
            if(!data) return res.status(404).send({"mensaje": "No fue posible encontrar el estudiante."});
            return res.send({"data": data});
        })
        .catch(e => {
            console.log("Error al crear estudiante" + e);
            return res.send({"mensaje": "No fue posible encontrar el estudiante."});
        })
}

let updateStudent = (req, res) => {
    studentRepo
        .update(req.params.id, req.body)
        .then(data => {
            if(!data) return res.status(200).send({"mensaje": "El usuario a actualizar no existe"});
            return res.send({"mensaje": "La información del estudiante fue actualizado exitosamente"});
        })
        .catch(e => {
            console.log("Error al crear estudiante" + e);
            return res.send({"mensaje": "No fue posible actualizar el estudiante."});
        })
}

let removeStudent = async (req, res) => {
    try {
        let result = await studentRepo.remove(req.params.id);
        return res.send({"mensaje": "La información del estudiante fue eliminada exitosamente"});
    } catch (error) {
        return res.send({"mensaje": "No fue posible eliminar la información del estudiante."})
    }
}

let calculateMeans = async (_, res) => {
    try {
        let infoStudents = await studentRepo.get();
        var data = infoStudents.map(s => {
            return {
                "id": s.id,
                "name": `${s.name} ${s.lastname}`,
                "mean": calculateMean(s.summary)
            };
        });
        return res.send({"data": data});        
    } catch (error) {
        console.log(error);
        return res.send({"mensaje": "No fue posible calcular la media de los estudiantes."})
    }
}

let updateMany = async (req, res) => {
    try {
        let queryParams = req.query;
        var updated = await studentRepo.updateMany(queryParams, req.body);
        return res.send({"data": "Información actualizada."});        
    } catch (error) {
        console.log(error);
        return res.send({"mensaje": "No fue posible actualizar la información de los estudiantes de acuerdo a los filtros."})
    }
}

function calculateMean(arrayScores) {
    var result = 0.0;
    arrayScores.forEach(element => {
        result += (element.percentage/100) * element.score;
    });
    return result;
}

module.exports = {
    addOne: addStudent,
    findAll: findAllStudents,
    findOne: findStudent,
    updateOne: updateStudent,
    removeOne: removeStudent,
    calculateMeans: calculateMeans,
    updateMany: updateMany
};