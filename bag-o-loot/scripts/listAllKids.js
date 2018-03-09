'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag-o-loot.sqlite');
const _ = require('lodash');


// destructure it here? if so, how do you test? 
module.exports = () => {
  return new Promise ((resolve, reject) => {
  db.all(`SELECT * FROM toys ORDER BY name`, 
    (error, data) => {
      data.forEach(toyData => {
        console.log(`${toyData.name} is getting a ${toyData.toy}!`)
      })
      resolve(data);
    })  
  })
}