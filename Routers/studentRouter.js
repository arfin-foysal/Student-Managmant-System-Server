const express = require("express");
const { addStudent, allStudentGet, singalStudentInfo, deleteStudent, editStudentInfo } = require("../Controllers/StudentController");
// const upload = require("../Helpers/imageUplode");


const studentRouter = express.Router();

studentRouter.post('/', addStudent)
studentRouter.get('/',allStudentGet)
studentRouter.get('/:id',singalStudentInfo)
studentRouter.delete('/:id',deleteStudent)
studentRouter.put('/:id', editStudentInfo)


module.exports=studentRouter