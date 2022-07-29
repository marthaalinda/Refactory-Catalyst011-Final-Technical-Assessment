const express = require('express');
const router = express.Router();

// importy model
const RegPatient = require('../models/RegisterPatient');
// route for landing page covid form
router.get('/', (req, res) => {
 
res.render('home');
  });

  // route to post data to databse
  router.post('/', async(req,res)=>{
    try{
      const newData = new RegPatient(req.body);
      await newData.save();
      res.redirect('/');
      console.log(req.body);
    }
    catch(err){
      res.status(400).send('Failed to Save patient information');
    }
  
  })
  

  module.exports = router;
