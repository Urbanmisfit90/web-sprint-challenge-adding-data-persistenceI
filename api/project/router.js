// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const { getProjects } = require('./model');

// Route handler for GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await getProjects();
    // Format the response to include the required fields
    const formattedProjects = projects.map(project => ({
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: Boolean(project.project_completed) // Convert to boolean
    }));
    res.status(200).json(formattedProjects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Unable to fetch projects" });
  }
});

module.exports = router;
