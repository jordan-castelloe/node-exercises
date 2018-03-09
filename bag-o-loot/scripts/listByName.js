'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag-o-loot.sqlite');
const toysArray = [];

module.exports = (name) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM toys WHERE name="${name}"`,
      (error, data) => {
        console.log(`These are all of ${name}'s toys:`);
        console.log(data);
        resolve(data);
      })
  })
}