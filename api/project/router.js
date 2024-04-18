// build your `/api/projects` router here
const express = require('express');
const router = express.Router(); // Define the router objec

// GET /api/projects
router.get('/projects', async (req, res) => {
    try {
      // Fetch all projects from the database
      const projects = await req.db('projects').select('*');
      
      // Respond with the fetched projects
      res.json(projects);
    } catch (error) {
      // Handle errors if any
      console.error('Error fetching projects:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router; // Export the router for use in other files
