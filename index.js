
require('dotenv').config()

//import exprees
const exprees = require('express')

//import cors
const cors = require('cors')

//import router for use
const router = require('./Routes/router')

//here import connection string here for running 
require('./Connection/connection')

//create server using express
const todoServer = exprees()

//use this all imported cors and express to put use server
todoServer.use(cors())
todoServer.use(exprees.json())
//here set the router to use server  fot royuter
todoServer.use(router)

const PORT = 4000 || process.env.PORT

todoServer.listen(PORT,()=>{
    console.log('Server Connected successfully');
})