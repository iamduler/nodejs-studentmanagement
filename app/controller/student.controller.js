const { getList, getDataById } = require("../services/student.service");

const getAllStudent = (req, res) => {
    const data = getList();

    if (data) {
        res.status(200).send(data);
    }
    else {
        res.status(404).send('Not found!');
    }
}

const getStudentById = (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.status(404).send('Empty id');
    }

    data = getDataById(id);

    if (data) {
        res.status(200).send(data);
    }
    else {
        res.status(404).send('Not found!');
    }
}

const createNewStudent = (req, res) => {
    console.log(req.body);
    res.send('Create new student');
}

const updateStudent = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Update existed student');
}

const deleteStudent = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Delete existed student');
}

module.exports = {
    getAllStudent, getStudentById, createNewStudent, updateStudent, deleteStudent
}