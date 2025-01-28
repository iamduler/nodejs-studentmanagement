const { Sequelize } = require("sequelize");
const { HOST, USER, PASSWORD, DATABASE, DIALECT } = require("../configs/db.config");
const { createStudentModel } = require("./student.model");

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
});

const Student = createStudentModel(sequelize);

module.exports = {
    sequelize,
    Student
}