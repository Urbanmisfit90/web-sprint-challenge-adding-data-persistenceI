// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const { getResources } = require('./model');

// Route to get all resources
router.get('/', async (req, res) => {
  try {
    const resources = await getResources();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve resources from the database." });
  }
});

module.exports = router;