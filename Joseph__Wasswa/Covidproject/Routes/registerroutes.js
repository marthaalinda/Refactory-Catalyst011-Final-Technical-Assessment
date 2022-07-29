const express = require('express');
const mongoose = require('mongoose');
const Covid = require('../models/Covid');
const router = express.Router();


router.get('/register', (req, res) => {
    res.render('index')} 
    
);
router.post('/register', async(req,res)=>{
    try{
        const covid = new Covid(req.body);
        await covid.save()
        res.redirect('/register')
        console.log(req.body)
    }
    catch(err){
        res.status(400).render('index')
        console.log(err)
    }
});

module.exports=router;