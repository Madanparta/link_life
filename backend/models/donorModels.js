const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    donationDate:{
        type:String,
        required:true,
    },
    donationQuantity:{
        type:Number,
        required:true,
    }
},{timestamps:true});

const Donor = mongoose.model('Donor',donorSchema);

module.exports = Donor;