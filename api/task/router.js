// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const { getAllTasks } = require('./model'); // You need to implement getAllTasks in model.js

// Route to get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await getAllTasks(); // Implement this function in model.js
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve tasks from the database." });
  }
});

module.exports = router;