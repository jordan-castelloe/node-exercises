const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const getTime = () => {
  let time = new Date().toISOString();
  let htmlTime = `<h1>The current time in ISO format is: ${time}</h1>`
  return htmlTime;
}

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
});

app.get('/time', (req, res) => {
  let time = getTime();
  console.log("time", time);
  res.send(time)
});

app.listen(PORT)