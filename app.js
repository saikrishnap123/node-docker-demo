const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to IT as Code!!!');
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
