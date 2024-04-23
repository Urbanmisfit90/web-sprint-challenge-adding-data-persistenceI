// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const { getAllTasks, createTask } = require('./model');

// Route to get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve tasks from the database." });
  }
});

// Route to create a new task
router.post('/', async (req, res) => {
  try {
    const { task_description, task_notes, project_id } = req.body;
    const newTask = await createTask(project_id, task_description, task_notes);
    res.status(201).json({ ...newTask, task_completed: !!newTask.task_completed });
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new task." });
  }
});

module.exports = router;