// Importing the Mongoose library
const mongoose = require("mongoose");

// Importing the environment variables using the dotenv library
require("dotenv").config();

// Defining a function to connect to the database
const dbConnect = () => {
	// Connecting to the database using the provided URL from the environment variables



		mongoose.connect(process.env.DATABASE_URL
			// ,{
			// useNewUrlParser:true,
			// useUnifiedTopology:true}
		).then(()=>console.log("DB connection established"))
		.catch(
			(error)=>{
			console.log("DB connection error")
			console.error(error)
			process.exit(1);
		})
};

// Exporting the dbConnect function for use in other files
module.exports = dbConnect;