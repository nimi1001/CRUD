const mongoose = require('mongoose')


const crudSchema=new mongoose.Schema({
    "word":{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Crud',crudSchema)