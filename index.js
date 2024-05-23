//Loads .env file contents into process .env by default
require('dotenv').config() 
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

//Create an Express application.
const pfServer = express()

//use cors in express server
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Project Fair Server Started at PORT : ${PORT}`);
})

pfServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red"> Project Farir Server Started and waiting for client request!!! </h1>`)
})


