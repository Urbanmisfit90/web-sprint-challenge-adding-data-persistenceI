// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('./model');

// [GET] /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve projects' });
  }
});

// [POST] /api/projects
router.post('/', async (req, res) => {
  const { project_name, project_description, project_completed } = req.body;
  if (!project_name) {
    return res.status(400).json({ error: 'Project name is required' });
  }
  
  try {
    const projectId = await createProject(project_name, project_description, project_completed);
    const newProject = {
      project_id: projectId,
      project_name,
      project_description,
      project_completed: !!project_completed // Ensure it's a boolean
    };
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not add project' });
  }
});

module.exports = router;
