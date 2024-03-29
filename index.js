const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors());

require("dotenv").config()

const PORT = process.env.PORT || 5000

// middleware
app.use(express.json())

const cubechamp = require('./router/cubechamp')

// mount
app.use("/api/v1", cubechamp)

// connection with db
const connectWithDb = require('./config/database')
connectWithDb();

app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

//   default routes
app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});


