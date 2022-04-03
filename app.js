const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://crud:crud12345@cluster1.fzl8j.mongodb.net/crud?retryWrites=true&w=majority'

const app = express()
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',()=>{
    console.log("db connected")
})

app.use(express.json())

const crudRouter = require('./rout/route.js')

app.use('/crud',crudRouter)

app.listen(9000,()=>{
    console.log("server running on port 9000")
})

