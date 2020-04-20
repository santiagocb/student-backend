
const express = require('express');
const router = express.Router();
const studentController = require('../app/controllers/student');

router.get("/", studentController.findAll);
router.post("/", studentController.addOne);
router.get("/:id", studentController.findOne);
router.put("/:id", studentController.updateOne);
router.delete("/:id", studentController.removeOne);

router.get("/scores/means", studentController.calculateMeans);
router.put("/", studentController.updateMany);

module.exports = router;