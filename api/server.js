// build your server here and require it from index.js
const express = require('express');
const { getProjects, createProject, updateProject, getProjectById } = require('./project/model');
const { createResource } = require('./resource/model');
const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    const data = await createResource(1, 'something', 'something else');
    res.send(data);
})

module.exports = app;
