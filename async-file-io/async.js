#!/usr/bin/env node
const file = process.argv[2];

const {readFile} = require("fs");

readFile(file, (err, fileData) => {
  if (err) throw err;
  console.log(fileData.toString());
});
