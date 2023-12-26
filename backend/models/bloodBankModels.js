const mongoose = require("mongoose");

const bloodBankSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'User',},
    bloodGroup:{type:String,required:true,set:(value)=>value.toUpperCase(),},
    quantityAvailable:{type:Number,required:true},
    description:{type:String,required:true},
},{timestamps:true});

const BloodBanker = mongoose.model('BloodBanker',bloodBankSchema);
module.exports = BloodBanker;