const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport')

const router = express.Router();
const Index = require('../models/indexModels')
router.get('/',(req,res)=>{
    res.render('index')
});

router.post('/newindex',async(req,res)=>{
    try {
     
        const newindex = new index(req.body)
        await newindex.save()
        res.send('Added successfully!')
        console.log(req.body)
    } catch (error) {
        res.send('Something went wrong, please try again')
    }
        
    
});

router.get('/allindex',async(req,res)=>{
    try {
        const allindex = await Index.find()
        console.log(allindex)
        res.send('Added successfully!')
    } catch (error) {
        res.send('Something went wrong, please try again')
    }
        
    
});

module.exports = router;