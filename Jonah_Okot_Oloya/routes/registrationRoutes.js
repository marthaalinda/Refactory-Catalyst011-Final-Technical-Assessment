const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {
 
res.render('register');
  });

  router.post('/', async(req,res)=>{
    try{
      const newUser = new User(req.body);
      await newUser.save();
      res.redirect('/');
      console.log(req.body);
    }
    catch(err){
      res.status(400).send('failed registration');
    }
  
  })
  

  module.exports = router;