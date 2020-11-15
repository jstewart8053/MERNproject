const express = require("express");
const getPosts = require('../controllers/posts.js')

const router = express.Router()

// http://localhost:5000/posts
router.get('/', getPosts);



module.exports = router