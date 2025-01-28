const { where } = require("sequelize");
const { Student } = require("../model/index");

const getList = async () => {
    const studentList = await Student.findAll();

    if (studentList) {
        return studentList;
    }
    
    return false;
}

const getDataById = async (id) => {
    if (!id) return false;

    const student = await Student.findOne({
        where: {
            id,
        }
    })

    if (student) {
        return student;
    }
    
    return false;
}

const create = async (student) => {
    const newStudent = await Student.create(student);
    return newStudent;
}

const updateStudentById = async (id, student) => {
    const studentUpdate = await getDataById(id);

    try {
        if (studentUpdate) {
            for (const property in student) {
                studentUpdate[property] = student[property];
            }

            const updatedStudent = await studentUpdate.save();
            return { success: 1, data: updatedStudent };
        }
        else {
            return { success: 0, message: "Invalid student ID." };
        }
    }
    catch (error) {
        console.log(error);
        return { success: 0, error: error };
    }
}

const deleteStudentById = async (id) => {
    const student = await getDataById(id);

    try {
        if (student) {
            await Student.destroy({
                where: {
                    id
                }
            });
        }
        else {
            return { success: 0, message: "Invalid student ID." };
        }
    
        return { success: 1 };
    }
    catch (error) {
        console.log(error);
        return { success: 0, error: error };
    }
}

module.exports = {
    getList, getDataById, create, updateStudentById, deleteStudentById
}