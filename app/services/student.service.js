let studentList = [
    {
        id: 1,
        fullName: "Bui Duc Lam",
        age: 25,
        gender: "Male",
    },
    {
        id: 2,
        fullName: "Le Thi Kim Trang",
        age: 24,
        gender: "Female",
    },
    {
        id: 3,
        fullName: "Bui Thi Ngoc Ha",
        age: 23,
        gender: "Female",
    },
    {
        id: 4,
        fullName: "Bui Thi Ha Thuong",
        age: 18,
        gender: "Female",
    },
];

const getList = () => {
    if (studentList) {
        return studentList;
    }
    
    return false;
}

const getDataById = (id) => {
    if (!id) return false;
    console.log(studentList);

    if (studentList) {
        const index = studentList.findIndex((student) => { return student.id == id });
        
        console.log(index);
        if (index !== -1) {
            return studentList[index];
        }
    }
    
    return false;
}

module.exports = {
    getList, getDataById
}