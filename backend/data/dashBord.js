const express = require('express');
const dashBord = express();
require('dotenv').config();
const Donor = require('../models/donorModels');
const Authentication = require('../middleware/autherization');
const User = require('../models/userModels')


dashBord.use(Authentication)

dashBord.get('/',async(req,res)=>{
    // console.log(req)
    try {

        const user = await User.findOne({_id:req.user})
        if(user){
            // res.status(200).send("sucess")
            res.status(200).json({message:"sucess"})
        }

    } catch (error) {
        res.status(400).json({ error: 'somthing wrong in the fetching and token' });
        // console.log(error)
    }
})

dashBord.post('/donor',async(req,res)=>{
    console.log(req.user)
    try {
        const user = await Donor.findOne({user:req.user})
        if(!user){
            await Donor.create({user:req.user,...req.body});
            res.status(201).json({message:"Order successfully created"})
        }else{
            res.status(404).json({ error: 'user alredy added the details' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        // console.log(error)
    }
});

module.exports = dashBord;