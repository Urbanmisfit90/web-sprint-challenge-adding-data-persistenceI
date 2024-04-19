// build your `Resource` model here
const knex = require("../../data/dbConfig");
const { getProjectById } = require("../project/model");

const createResource = async (projectId, name, description = "") => {
  const project = await getProjectById(projectId);
  if (!project) throw "there is no project with this id";
  const [resourceId] = await knex("resources").insert({
    resource_name: name,
    resource_description: description,
  });
  await knex('project_resources').insert({
    project_id: project.project_id,
    resource_id: resourceId
  })
  return resourceId;
};

module.exports = {
    createResource
}