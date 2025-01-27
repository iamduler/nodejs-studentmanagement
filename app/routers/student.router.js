const express = require("express");
const studentRouter = express.Router();

studentRouter.get('/', (req, res) => {
    res.send('Get list student');
})

studentRouter.get('/:id', (req, res) => {
    res.send('Get student detail');
})

studentRouter.post('', (req, res) => {
    console.log(req.body);
    res.send('Create new student');
})

studentRouter.put('/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Update existed student');
})

studentRouter.delete('/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Delete existed student');
})

module.exports = studentRouter;