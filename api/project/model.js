// build your `Project` model here
const knex = require('../../data/dbConfig');

const createProject = async (name, description = "", completed = false) => {
  const [projectId] = await knex("projects").insert({
    project_name: name,
    project_description: description,
    project_completed: completed,
  });
  return projectId;
};

const getProjects = async () => {
  const projects = await knex("projects").select("*");
  return projects;
};

const getProjectById = async (id) => {
  const projects = await knex("projects")
    .select("*")
    .where({ project_id: id })
    .first();
  return projects;
};

const updateProject = async (projectId, name, description, completed) => {
  await knex("projects").where({ project_id: projectId }).update({
    project_name: name,
    project_description: description,
    project_completed: completed,
  });
};

const deleteProject = async (projectId) => {
  await knex("projects").where({ project_id: projectId }).del();
};

module.exports = {
  createProject,
  getProjectById,
  getProjects,
  updateProject,
  deleteProject
};