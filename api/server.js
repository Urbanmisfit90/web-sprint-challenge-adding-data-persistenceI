// build your server here and require it from index.js
const express = require('express');
const router = express.Router();
const router = require('./router'); // Import the router object

// Middleware
app.use(express.json());

// Import controllers or define handlers inline

// POST /api/resources
router.post('/resources', (req, res) => {
  // Handle POST /api/resources
});

// GET /api/resources
router.get('/resources', (req, res) => {
  // Handle GET /api/resources
});

// POST /api/projects
router.post('/projects', (req, res) => {
  // Handle POST /api/projects
});

// GET /api/projects
router.get('/projects', (req, res) => {
  // Handle GET /api/projects
});

// POST /api/tasks
router.post('/tasks', (req, res) => {
  // Handle POST /api/tasks
});

// GET /api/tasks
router.get('/tasks', (req, res) => {
  // Handle GET /api/tasks
});

module.exports = router;