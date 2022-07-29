const express = require('express');
const mongoose = require('mongoose');
// const passport = require('passport');
const Index = require('../models/Index');

const router = express.Router();

router.get('/covid', (req, res) => {
    res.render('index')} 
    
);


router.post('/covid', async(req,res)=>{
    try{
        const index = new Index(req.body);
        await index.save()
        res.redirect('/covid')
        console.log(req.body)
    }
    catch(err){
        res.status(400).render('index')
        console.log(err)
    }
});

// accessing the report
router.get('/covid/report', async(req, res) => {
    try{
        let items = await Index.find();
        res.render('report',{
            indexes:items,
          }  )}
    catch(err){
        console.log(err)
        res.send('failed to retrive purchases details')
    }
});

// delete route
router.post('/covid/delete', async (req, res) => {
    try {
        await Index.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})








module.exports=router;