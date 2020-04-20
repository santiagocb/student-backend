
const express = require('express');
const router = express.Router();
const studentController = require('../app/controllers/student');

router.get("/", (_, res) => {
    res.send('Hello World!');
});

router.get("/students", studentController.findAll);
router.post("/students", studentController.addOne);
router.get("/students/:id", studentController.findOne);
router.put("/students/:id", studentController.updateOne);
router.delete("/students/:id", studentController.removeOne);

router.get("/students/scores/means", studentController.calculateMeans);
router.put("/students", studentController.updateMany);

module.exports = router;