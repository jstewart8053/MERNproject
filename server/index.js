const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require("cors");


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(urlencoded.json({ limit: "30mb", extended: true }))
app.use(cors());

app.listen(process.env.PORT || 3000)