const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
//require Mananger database to save new user 
const Client = require('../models/Client');


router.get('/', (req, res) => {
    res.render('form', { title: 'Register' })
});
router.get('/', (req, res) => {
    res.render('success', { title: 'Register' })
});
router.post('/', async (req, res) => {
    try {
        let client = new Client(req.body);
        console.log(req.body);
        await client.save();
        res.redirect('/success');

    }
    catch (err) {
        res.status(400).send('Cannot Register New User')
    }
});
module.exports = router;