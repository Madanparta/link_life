const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      phone_number:{
        type:Number,
        required:true,
      },
      gender: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      district: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      blood_group: {
        type: String,
        // Example: enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true,
        set:(value)=>value.toUpperCase(),
      },
      role: {
        type: String,
        required: true,
        // enum: ['donor', 'receiver', 'blodoBank', 'admin'],
      },
      // approved: {
      //   type: Boolean,
      //   default: false
      // }
},{timestamps:true});

const User = mongoose.model('User',usersSchema);

module.exports = User;