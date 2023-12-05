// Import necessary modules
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const cloudinary = require('cloudinary')


// Get All Posts with Media URLs
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().lean(); // Convert Mongoose documents to plain JavaScript objects

    // Map each post to include a Cloudinary URL
    const postsWithMediaURLs = posts.map(post => {
      return {
        ...post,
        mediaUrl: ``, // Replace with Cloudinary URL
      };
    });

    res.status(200).json(postsWithMediaURLs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
