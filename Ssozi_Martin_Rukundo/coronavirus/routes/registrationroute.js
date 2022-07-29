const express = require('express');
const Registration = require('../models/Registration');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('registration')
})

outer.post("/", async (req, res) => {
    try {
      const register = new Registration(req.body);
      await register.save();
      res.redirect("/register");
      console.log("Submitted successffully");
    } catch (err) {
      res.status(400).redirect("/register");
      console.log("Not successful");
    }
  });


  module.exports = router;