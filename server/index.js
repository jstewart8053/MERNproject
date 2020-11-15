const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require("cors");
const { urlencoded } = require("body-parser");

const postRoutes = require('./routes/posts.js')

const app = express();
app.use('/posts', postRoutes)
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const CONNECTION_URL = "mongodb+srv://user:Malayah09@cluster0.buw8j.mongodb.net/test?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
//https://cloud.mongodb.com/v2/5f950b83f942f705fc72679e#clusters