const express = require('express');
const router = express.Router();


// route for landing page covid form
router.get('/', (req, res) => {
 
res.render('home');
  });

  module.exports = router;
