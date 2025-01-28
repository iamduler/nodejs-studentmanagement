const { getList, getDataById, create, updateStudentById, deleteStudentById } = require("../services/student.service");

const getAllStudent = async (req, res) => {
    const data = await getList();

    if (data) {
        res.status(200).send(data);
    }
    else {
        res.status(404).send('Not found!');
    }
}

const getStudentById = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.status(404).send('Empty id');
    }

    data = await getDataById(id);

    if (data) {
        res.status(200).send(data);
    }
    else {
        res.status(404).send('Not found!');
    }
}

const createNewStudent = async (req, res) => {
    let student = req.body;
    const newStudent = await create(student);
    res.status(201).send(newStudent);
}

const updateStudent = async (req, res) => {
    let student = req.body;
    let id = req.params.id;
    const result = await updateStudentById(id, student);

    if (result.success) {
        res.status(200).send("Record updated!");
        return;
    }
    else if (result.message) {
        res.status(500).send(result.message);
        return;
    }
    
    res.status(500).send("Updated failed. Something went wrong.");
}

const deleteStudent = async (req, res) => {
    let id = req.params.id;
    const result = await deleteStudentById(id);
    
    if (result.success) {
        res.status(200).send("Record deleted!");
        return;
    }
    else if (result.message) {
        res.status(500).send(result.message);
        return;
    }
    
    res.status(500).send("Deleted failed. Something went wrong.");
}

module.exports = {
    getAllStudent, getStudentById, createNewStudent, updateStudent, deleteStudent
}