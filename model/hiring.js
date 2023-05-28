const mongoose = require("mongoose");


const CoachHiringSchema = new mongoose.Schema(
    {
    fullName: {
         type: String,
          required: true 
        },
    email: {
         type: String,
          required: true
         },
    phoneNumber: {
         type: Number,
          required: true
         },
    address: {
         type: String,
          required: true
         },
    city: {
         type: String,
          required: true 
        },
    state: {
         type: String,
         required: true 
        },
    country: {
         type: String,
        required: true
     },
    experience: {
         type: String,
          required: true
         },
    qualification: {
         type: String,
          required: true
         },
    additionalInfo: {
         type: String 
        },
    createdAt: {
         type: Date,
          default: Date.now 
    },
  });

  module.exports = mongoose.model("CoachHiring", CoachHiringSchema);
  