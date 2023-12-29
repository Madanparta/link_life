const express = require('express');
const User = require('../models/userModels');
const Feedback = require('../models/feedbackModels');
const Authentication = require('../middleware/autherization');
const getUsers = express.Router();

getUsers.use(Authentication)

getUsers.get('/users',async(req,res)=>{
    try {
        const data = await User.find({});

        if(data){
            return res.status(200).json({data:data});
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error)
    }
});


getUsers.post('/users/feedback',async(req,res)=>{
    console.log(req.body)
    try {
        const user = await Feedback.findOne({user:req.user});
        if(!user){
            await Feedback.create({user:req.user,...req.body});
            res.status(201).json({message:"feedback successfully"})
        }else{
            res.status(404).json({ error: 'user alredy added the details' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error)
    }
})

module.exports = getUsers;