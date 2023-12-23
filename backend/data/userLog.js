const express = require('express');
const userLog = express();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const cookie = require('cookie-parser');
const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/userModels');

userLog.post('/signin',asyncHandler(async(req,res)=>{
    try {
        const {email,password}=req.body;

        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(404).json({ error: 'Invalid user - User dones not existed' });
        }
        bcrypt.compare(password,userExist.password).then(function(result){
            if(result){
                const token = jwt.sign({
                    email:userExist.email,
                    id:userExist._id,
                    name:userExist.name
                },process.env.SECRET,{expiresIn: '1h'})

                // res.cookie('token',token,{
                //     httpOnly: true,
                //     maxAge: 3600000,
                //     sameSite: 'strict',
                //     secure:process.env.NODE_ENV === 'production',
                // })

                return res.status(200).json({ 
                    "Id":userExist._id,
                    "username":userExist.username,
                    "email":userExist.email,
                    "phone_number":userExist.phone_number,
                    "city":userExist.city,
                    "district":userExist.district,
                    "state":userExist.state,
                    "blood_group":userExist.blood_group,
                    "role":userExist.role,
                    "Token":token,
                 });
            }
            if(!result){
                return res.status(400).json({ error: 'Bad Request - Invalid username and password' });

            }
        })
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error)
    }
}))



module.exports = userLog;