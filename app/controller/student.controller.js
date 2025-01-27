const getAllStudent = (req, res) => {
    res.send('Get list student');
}

const getStudentById = (req, res) => {
    res.send('Get student detail');
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