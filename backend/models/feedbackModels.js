const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  feedback: { type: String },
  },{ timestamps: true }
);
const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;