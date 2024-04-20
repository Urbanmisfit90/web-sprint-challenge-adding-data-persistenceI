// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('./model');

// Route to get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve projects from the database." });
  }
});

// Route to create a new project
router.post('/', async (req, res) => {
  try {
    const { project_name, project_description, project_completed } = req.body;
    const newProject = await createProject(project_name, project_description, project_completed);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new project." });
  }
});

module.exports = router;
