const checkEmpty = (req, res, next) => {
    const { fullName, gender, age } = req.body;

    if (fullName && gender && age) {
        next();
    }
    else {
        res.status(500).send("Required fields: fullName, gender, age");
    }
}

module.exports = {
    checkEmpty,
}