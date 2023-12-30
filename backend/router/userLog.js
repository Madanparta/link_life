const express = require('express');
const userLog = express();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
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
                },process.env.SECRET,{expiresIn: '1h'})

                // console.log(token)

                // res.cookie('token',token,{
                //     httpOnly: true,
                //     maxAge: 3600000,
                //     sameSite: 'strict',
                //     secure:process.env.NODE_ENV === 'production',
                // })

                return res.status(200).json({ 
                    "_id":userExist._id,
                    "username":userExist.username,
                    "email":userExist.email,
                    "phone_number":userExist.phone_number,
                    "city":userExist.city,
                    "district":userExist.district,
                    "state":userExist.state,
                    "blood_group":userExist.blood_group,
                    "role":userExist.role,
                    "token":token,
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
}));

// editing..
userLog.put('/edit/:id',asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const {username,email,phone_number,city,password,state} = req.body;
    // console.log(id)
    try {
        const isUser = await User.findOne({email});
        if(!isUser){
            return res.status(404).json({ message: 'User not found' })
        }else{
            bcrypt.hash(password,10, async function(err,hash){
                // const map = {password:hash}
                if(err){
                    return res.status(400).json({
                        "Error":err
                    })
                }else{
                    let updateData = await User.findByIdAndUpdate(id,{username,email,phone_number,city,password:hash,state},{ new: true });
                    // if (!updateData) {
                    //     return res.status(404).json({ message: 'User not found' });
                    // }
                    res.json(updateData);
                }
            })
        }

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error)
    }
}))



// get..

// userget.get('/getusers',asyncHandler(async(req,res)=>{
//     try {
//         let data = await User.find({});
        
//         if(data){
//             return res.status(200).json({message:"success data getting."})
//         }
        
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//         console.log(error)
//     }
// }));

module.exports = userLog;