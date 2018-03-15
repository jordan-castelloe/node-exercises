const express = require('express');
const app = express();
const middleware = require('./middleware');

// MIDDLEWARE
app.use('/animals', middleware);

// error handling
app.use((req, res, next) => {
  let error = new Error();
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send('<h2>No can do, home skillet. This page DOES NOT EXIST.</h2>')
})

app.listen(8080, () => {
  console.log('listening on port 8080');
})

