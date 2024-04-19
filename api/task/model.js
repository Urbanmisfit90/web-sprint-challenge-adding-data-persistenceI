// build your `Task` model here
const knex = require('../../data/dbConfig');

const getAllTasks = async () => {
  const tasks = await knex('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .select(
      'tasks.task_id',
      'tasks.task_description',
      'tasks.task_notes',
      'tasks.task_completed',
      'projects.project_name',
      'projects.project_description'
    );
  return tasks;
};

module.exports = {
  getAllTasks,
};