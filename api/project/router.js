// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const { getProjects } = require('./model');

// Route to get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve projects from the database." });
  }
});

module.exports = router;
