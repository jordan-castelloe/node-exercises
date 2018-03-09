'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag-o-loot.sqlite');

module.exports = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM toys WHERE toy_id=${id}`,
      (error) => {
        if(error){
          return console.log('error!', error);
        }
        resolve();
      });
  })
}