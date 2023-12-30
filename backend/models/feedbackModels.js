const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User',
  },
  feedback: { type: String },
  },{ timestamps: true }
);
const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;