// build your `Project` model here
const knex = require('../../data/dbConfig');

const getProjects = async () => {
  const projects = await knex("projects").select("*");
  return projects;
};

module.exports = {
  getProjects
};