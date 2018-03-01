#!/usr/bin/env node

const {version} = process;
const {versions : {v8}} = process;

console.log(`Node version: ${version}\nV8: ${v8}`);