// Setting Up an Express Js App 

//Refer snippet : https://nodejs.org/en/docs/guides/nodejs-docker-webapp/ 

'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Dukaan is Open for Business 🍕');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});