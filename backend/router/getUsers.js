const express = require('express');
const User = require('../models/userModels');
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
})

module.exports = getUsers;