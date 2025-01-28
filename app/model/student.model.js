const { DataTypes } = require("sequelize");

const createStudentModel = (sequelize) => {
    return sequelize.define("Student", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        gender: {
            type: DataTypes.STRING
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