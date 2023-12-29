const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const userRegst = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userModels');


userRegst.post('/signup',asyncHandler(async(req,res)=>{
    // console.log(req.body);
    try {
        const {name,username,age,password,email,phone_number,gender,city,district,blood_group,state} = req.body;

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
                await User.create({name,username,age,password:hash,email,phone_number,gender,city,district,blood_group,state})
                return res.status(200).json({ success: 'User registration successful' })
            }
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });

    }
}));

module.exports = userRegst;
