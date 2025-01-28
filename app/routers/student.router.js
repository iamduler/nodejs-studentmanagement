const express = require("express");
const studentRouter = express.Router();
const { getAllStudent, getStudentById, createNewStudent, updateStudent, deleteStudent } = require("../controller/student.controller");
const { logFeature } = require("../middlewares/logger/log-feature");
const { checkEmpty } = require("../middlewares/validation/student.validation");

studentRouter.get('/', logFeature, getAllStudent);

studentRouter.get('/:id', getStudentById);

studentRouter.post('/', checkEmpty, createNewStudent);

studentRouter.put('/:id', updateStudent);

studentRouter.delete('/:id', deleteStudent);

module.exports = studentRouter;