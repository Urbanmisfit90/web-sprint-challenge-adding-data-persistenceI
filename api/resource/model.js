// build your `Resource` model here
const knex = require("../../data/dbConfig");

const createResource = async (name, description = "") => {
  const [resourceId] = await knex("resources").insert({
    resource_name: name,
    resource_description: description,
  });
  return resourceId;
};

const getResources = async () => {
  const resources = await knex.select("*").from("resources");
  return resources;
};

module.exports = {
    createResource,
    getResources
};