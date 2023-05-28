const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
	{
	parentName: {
		 type: String,
		  required: true
		 },
		 childName: {
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
	age: { 
		type: Number,
		 required: true },
	experience: {
		 type: String,
		  required: true
		 },
	
	 country: {
		type: String,
		required: true
		},
	createdAt: {
		 type: Date,
		 default: Date.now
	},
  }
);

module.exports = mongoose.model("StudentEnrollment", studentSchema);