const express = require('express');
const User = require('../models/userModels');
// const Feedback = require('../models/feedbackModels');
const Authentication = require('../middleware/autherization');
const Donor = require('../models/donorModels');
const BloodBanker = require('../models/bloodBankModels');
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
    }
});




// Donor router..
getUsers.get('/donor',async(req,res)=>{
    try {
        const user = await Donor.find({})
        if(user){
            res.status(201).json({data:user})
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// bloodbanker router..
getUsers.get('/bloodBanker',async(req,res)=>{
    try {

        const data = await BloodBanker.find({});
        if(data){
            res.status(201).json({data:data})
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = getUsers;