const express = require('express');
const mongoose = require('mongoose');
const user = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;
    const user = new user({email,password});
    await user.save();
    res.send('You made a post request');
});

module.exports = router;