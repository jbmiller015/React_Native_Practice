require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const jwtString = process.env.JWT_AUTH;

const router = express.Router();

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;
    try {
        const user = new User({email, password});
        await user.save();

        const token = jwt.sign({userId: user._id},jwtString);
        res.send({token});
    }catch (e) {
        res.status(422).send(e.message);
    }

    
});

module.exports = router;