// build your server here and require it from index.js
const express = require('express');
const { createResource } = require('./resource/model');
const projectsRouter = require('./project/router');
const {
  getProjects,
  createProject,
  updateProject,
  getProjectById
} = require('./project/model');

const app = express();
app.use(express.json());

// Mount the projects router
app.use('/api/projects', projectsRouter);

// Route to create a resource (for testing purposes)
app.get('/', async (req, res) => {
  try {
    const data = await createResource(1, 'something', 'something else');
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create resource.' });
  }
});

// Route to get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve projects.' });
  }
});

// Route to create a new project
// app.post('/api/projects', async (req, res) => {
//   console.log(req.body)
//   try {
//     const { name, description, completed } = req.body;
//     // Ensure required fields are provided
//     if (!name || !description || completed === undefined || typeof completed !== 'boolean') {
//       return res.status(400).json({ error: 'Invalid project data. Please provide name, description, and completed (as a boolean).' });
//     }
//     const projectId = await createProject(name, description, completed);
//     const newProject = await getProjectById(projectId);
//     res.status(201).json(newProject);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create project.' });
//   }
// });

// Route to update an existing project
app.put('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, completed } = req.body;
    await updateProject(id, name, description, completed);
    const updatedProject = await getProjectById(id);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project.' });
  }
});

// Route to get a project by ID
app.get('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await getProjectById(id);
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve project.' });
  }
});

module.exports = app;