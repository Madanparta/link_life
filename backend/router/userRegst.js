const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const userRegst = express.Router();
const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('../models/userModels')

const SID_NUMBER = process.env.SID;
const AUTH_TOKEN = process.env.AUTH_CODE;


var twilio = require('twilio')(SID_NUMBER,AUTH_TOKEN);

userRegst.post('/signup',asyncHandler(async(req,res)=>{
    // console.log(req.body);
    try {
        const {name,username,age,password,email,phone_number,gender,city,district,blood_group,state,role,feedback} = req.body;

        const emailCheck = await User.findOne({email});
        if(emailCheck){
            return res.status(409).json({ error: 'Conflict - User already exists' });
        }
        
        bcrypt.hash(password,10, async function(err,hash){
            if(err){
                return res.status(404).json({
                    error: 'Authentication failed' 
                })
            }
            if(hash){
                await User.create({name,username,age,password:hash,email,phone_number,gender,city,district,blood_group,state,role:role || 'receiver',feedback:feedback || null})

                twilio.messages
                    .create({
                        body:`🌟 Greetings! 🌟
                            You've successfully registered. Welcome to our community!
                            Please make a note of your password: "${password}"
                            We look forward to having you as part of our LINK_LIFE family. 🌐✨`,
                        to:'+91'+phone_number,
                        from:'+12058589077',
                    })
                    .then((res)=>console.log('Message sended successfully.'))
                    .catch((err)=>console.log(err))
                return res.status(200).json({ success: 'User registration successful' })
            }
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });

    }
}));

module.exports = userRegst;


