const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Model import
const TransportCompany = require("./model.js");

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
