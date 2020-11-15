const express = require("express");
const router = express.Router()


const getPosts = ('/', (req, res) => {
    res.send('working')
})



module.exports = getPosts