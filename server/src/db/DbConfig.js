const mongoose = require('mongoose')

async function connectDb(){
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("database connect successful........")
    } catch (error) {
       console.log(error) 
       console.log("error in connection database")
    }
}

module.exports = connectDb