'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag-o-loot.sqlite');
const toyData = require('./data/toyData');

const insertRows = () => {
  return Promise.all(toyData.map(({ toy, name, delivered }) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO toys VALUES (null, "${toy}", "${name}", ${delivered})`,
        function (err) { //THIS IS WHERE THE CALLBACK STARTS
          if (err) return reject(err);
          resolve(this.lastID)
        })
    });
  }));
}

module.exports.createTables = () => {
  return new Promise((resolve, reject) => {
    db.run('DROP TABLE IF EXISTS toys')
      .run(
        'CREATE TABLE IF NOT EXISTS toys (toy_id INTEGER PRIMARY KEY, toy TEXT, name TEXT, delivered INTEGER)',
        (err) => { //THIS IS WHERE THE CALLBACK STARTS
          if (err) return reject(err)
          resolve(insertRows())
        }
      )
  });
}