const mongoose = require('mongoose')

const studentSchema =new mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:Number, required:true},
    email:{type:String, required:true},
    age:{type:Number},
    class:{type:Number, required:true},
    marks:{type:Number, required:true}

})

const StudentModel = new mongoose.model('student', studentSchema)

module.exports= StudentModel ;