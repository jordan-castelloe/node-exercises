#!/usr/bin/env node
const readFile = process.argv[2];
const destinationFile = process.argv[3];

const {
  createReadStream,
  createWriteStream,
  writeFile
} = require("fs")

const {
  Transform, 
  Writable
} = require("stream");

const capitalize = Transform();
const writeStream = Writable();

capitalize._transform = (buffer, _, callback) => {
  callback(null, buffer.toString().toUpperCase())
}

writeStream._write = (buffer, _, next) => {
  writeFile(destinationFile, buffer, (error) => {
    if(error) throw error;
    console.log("Heck yes! It worked! Go check out languages_caps.json!");
  })
  next();
}

createReadStream(readFile)
.pipe(capitalize)
.pipe(writeStream)

