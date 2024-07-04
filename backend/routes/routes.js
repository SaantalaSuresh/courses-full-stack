const express = require('express');
const Video = require("../models/videos")

const router = express.Router();

router.get('/courses', async (req, res) => {
    try {
      const result = await Video.find();
      
      res.status(200).json({data:result});
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });




module.exports = router;