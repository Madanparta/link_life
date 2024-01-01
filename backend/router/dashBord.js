const express = require('express');
const dashBord = express();
require('dotenv').config();
const Donor = require('../models/donorModels');
const Authentication = require('../middleware/autherization');
const User = require('../models/userModels');
const BloodBanker = require('../models/bloodBankModels');


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

// Donor router..
dashBord.post('/donor',async(req,res)=>{
    // console.log(req.user)
    try {
        const user = await Donor.findOne({user:req.user})
        if(!user){
            await Donor.create({user:req.user,...req.body});
            res.status(201).json({message:"successfully created"})
        }else{
            res.status(404).json({ error: 'user alredy added the details' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        // console.log(error)
    }
});

// bloodbanker router..
dashBord.post('/bloodBanker',async(req,res)=>{

    try {
        // const user = await BloodBanker.findOne({user:req.user})
        // console.log(user)

        await BloodBanker.create({user:req.user,...req.body});
        res.status(201).json({message:"Order successfully created"})
        // if(!user){
            
        // }else{
        //     res.status(404).json({ error: 'user alredy added the details' });
        // }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        // console.log(error)
    }
});

// feeding feedback in user..
dashBord.put('/feedback/:id', async(req,res)=>{
    let id = req.params.id;
    const {feedback}=req.body;
    try {
        let updateData =await User.findByIdAndUpdate({_id:id},{feedback:feedback})
        if(updateData){
            return res.status(200).json({message:"feedback updated"});
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error)
    }
});

// specifing user bloodbanker or bloodbanker like..
dashBord.put('/update/:id',async(req,res)=>{
    let id = req.params.id;
    const {role}=req.body;
    console.log(role)
    try {
        let updateData =await User.findByIdAndUpdate({_id:id},{role:role})
        if(updateData){
            return res.status(200).json(updateData);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error)
    }
})

module.exports = dashBord;