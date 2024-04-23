// build your server here and require it from index.js
const express = require("express");
const resourcesRouter = require("./resource/router")
const projectsRouter = require("./project/router");

const app = express();
app.use(express.json());

// Mount the projects router
app.use("/api/projects", projectsRouter);

app.use("/api/resources", resourcesRouter)

module.exports = app;
