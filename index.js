// start your server here
const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');
const apiRouter = require('./api');

const app = express();
const db = knex(knexConfig.development);

app.use(express.json());

// Pass Knex instance to API router
app.use((req, res, next) => {
    req.db = db;
    next();
  });

// Mount the API router
app.use('/api', apiRouter);

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});