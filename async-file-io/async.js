#!/usr/bin/env node
const file = process.argv[2];

const {
  createReadStream,
  createWriteStream,
} = require("fs")

const {
  Writable
} = require("stream");

const writeStream = Writable();


writeStream._write = (buffer, _, next) => {
  console.log(buffer.toString());
  next();
}

createReadStream(file)
.pipe(writeStream)