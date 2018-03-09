const sqlite3 = require('sqlite3').verbose();
const { createTables } = require('./makeTable');

(function createDB() {
  new sqlite3.Database('bag-o-loot.sqlite', () => {
    createTables()
      .then(data => {
        console.log("last ids", data);
      })
      .catch(err => {
        console.log("oops", err);
      })
  })
}());