'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag-o-loot.sqlite');

module.exports = () => {
  return new Promise ((resolve, reject) => {
  db.all(`SELECT * FROM toys ORDER BY name`, 
    (error, data) => {
      resolve(data);
    })  
  })
}