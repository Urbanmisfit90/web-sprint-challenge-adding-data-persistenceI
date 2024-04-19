// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const { getResources } = require('./model'); // You need to implement getResources in model.js

// Route to get all resources
router.get('/', async (req, res) => {
  try {
    const resources = await getResources(); // Implement this function in model.js
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve resources from the database." });
  }
});

module.exports = router;