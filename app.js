//First, create a new directory where all the files would live. In this directory create a package.json file that describes your app and its dependencies:


'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/dukaan', (req, res) => {
  res.send('Dukaan is Open for Business 🍕');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});