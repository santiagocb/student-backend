
const express = require('express');
const router = express.Router();
const studentController = require('../app/controllers/student');

router.get("/", (req, res) => {
    res.send('Hello World!');
});

router.post("/student", studentController.add)

module.exports = router