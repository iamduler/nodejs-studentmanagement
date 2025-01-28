const { DataTypes } = require("sequelize");

const createStudentModel = (sequelize) => {
    sequelize.define("Student", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        gender: {
            type: DataTypes.INTEGER
        },
        numberClass: {
            type: DataTypes.INTEGER
        }
    },
    {
        timestamps: false,
        tableName: 'students'
    })
}

module.exports = {
    createStudentModel
}