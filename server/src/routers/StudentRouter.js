const express = require('express')
const { saveStudent, fetchStudent, updateStudent, deleteStudent } = require('../controllers/StudentController')

const StudentRouter = express.Router()

StudentRouter.post("/students", saveStudent)
StudentRouter.get("/students", fetchStudent)
StudentRouter.put("/students/:id",updateStudent)
StudentRouter.delete("/students/:id",deleteStudent)
module.exports=StudentRouter