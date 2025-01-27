const express = require("express");
const studentRouter = express.Router();
const { getAllStudent, getStudentById, createNewStudent, updateStudent, deleteStudent } = require("../controller/student.controller");

studentRouter.get('/', getAllStudent);

studentRouter.get('/:id', getStudentById);

studentRouter.post('', createNewStudent);

studentRouter.put('/:id', updateStudent);

studentRouter.delete('/:id', deleteStudent);

module.exports = studentRouter;