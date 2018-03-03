#!/usr/bin/env node

const {readFileSync} = require("fs");

const file = process.argv[2];

if(file){
  try {
    const data = readFileSync(file);
    process.stdout.write(data.toString());
  }catch(err){
    console.log("AAAAAAAAAAAHHHHHHHHH", err);
  }
} else{
  process.exit();
}