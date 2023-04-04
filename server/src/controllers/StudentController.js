const StudentModel = require("../models/StudentModel");
const { StatusCodes } = require("http-status-codes")
async function saveStudent(req,res){
    try {
        const student = StudentModel(req.body)
        const savedStudent = await student.save()

        res.status(StatusCodes.CREATED).json(savedStudent)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

async function fetchStudent(req,res){
    try {
        const student = await StudentModel.find()

        res.status(StatusCodes.OK).json(student)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in fetching data"})
    }
}

async function updateStudent(req,res){
    try {
        const student = await StudentModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(StatusCodes.OK).json(student)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in updating data", error})
    }
}

async function deleteStudent(req,res){
    try {
        const student = await StudentModel.findByIdAndDelete(req.params.id,{new:true})
        res.status(StatusCodes.NO_CONTENT).json({message:"data delete successful"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in updating data", error})
    }
}
module.exports = { saveStudent, fetchStudent, updateStudent ,deleteStudent}