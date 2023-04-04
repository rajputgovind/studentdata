const express = require('express');
const connectDb = require('./src/db/DbConfig');
const StudentRouter = require('./src/routers/StudentRouter');
const cors = require('cors')
require('dotenv/config')
const app = express();
const PORT =process.env.PORT 
app.use(cors())
app.use(express.json())
app.use(StudentRouter)
app.listen(PORT,()=>{
    console.log(`server is listning onport ${PORT}`)
    connectDb()
})