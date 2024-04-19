// build your server here and require it from index.js
const express = require('express');
const { createResource } = require('./resource/model');
const { 
  getProjects, 
  createProject, 
  updateProject, 
  getProjectById 
} = require('./project/model');

const app = express();
app.use(express.json());

// Route to create a resource
app.get('/', async (req, res) => {
    try {
        // Assuming the createResource function is used for testing purposes
        const data = await createResource(1, 'something', 'something else');
        res.send(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create resource.' });
    }
});

// Example usage of project-related functions (replace with actual route handlers)
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await getProjects();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve projects.' });
    }
});

// Route to create a new project
app.post('/api/projects', async (req, res) => {
    try {
        const { name, description, completed } = req.body;
        // Ensure required fields are provided
        if (!name || !description || completed === undefined || typeof completed !== 'boolean') {
            return res.status(400).json({ error: 'Invalid project data. Please provide name, description, and completed (as a boolean).' });
        }
        const projectId = await createProject(name, description, completed);
        res.status(201).json({ projectId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create project.' });
    }
});

// Route to update an existing project
app.put('/api/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, completed } = req.body;
        await updateProject(id, name, description, completed);
        res.status(200).json({ message: 'Project updated successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update project.' });
    }
});

// Route to get a project by ID
app.get('/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const project = await getProjectById(id);
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve project.' });
    }
});

module.exports = app;
