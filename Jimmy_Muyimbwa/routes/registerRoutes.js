const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Covid = require('../models/Covid');

router.get('/',(req,res)=>{
    res.render('registration')
})

router.post('/', async(req,res)=>{
    try{
        const covid = new Covid(req.body);
        await covid.save()

        res.render('registration')
        console.log(req.body)
    }
    catch(err){
        console.log(err)

    }
})



module.exports = router;


