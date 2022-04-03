const express = require('express')
const router = express.Router()
const Crud = require('../models/model')


router.get('/', async(req,res) => {
    try{
        const crud_get = await Crud.find()
        res.json(crud_get)
    }catch(err){
        res.send('Error :' + err)
    }
})

router.put('/:id',async(req,res)=> {
    try{
        const crud_entry = await Crud.findById(req.params.id)
        crud_entry.word=req.body.word
        const a1 = await crud_entry.save()
        res.json(a1)
    }catch(err){
        res.send('Error:'+ err)
    }
})

router.post('/', async(req,res) => {
    const crud_entry = new Crud({
        word: req.body.word
    })

    try{
        const a1 =  await crud_entry.save()
        res.json(a1)
    }catch(err){
        res.send('Error:'+ err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const crud_entry = await Crud.findById(req.params.id)
        const a1 = await crud_entry.remove()
        res.json(a1)
    }catch(err){
        res.send('Error:'+ err)
    }
})

module.exports=router