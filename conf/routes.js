
const express = require('express');
const router = express.Router();
const studentController = require('../app/controllers/student');

router.get("/", (req, res) => {
    res.send('Hello World!');
});

router.get("/students", studentController.findAll)
router.post("/students", studentController.add)
router.get("/students/:id", studentController.findOne(id))
router.put("/students/:id", studentController.updateOne(id))
router.delete("/students/:id", studentController.removeOne(id))

module.exports = router