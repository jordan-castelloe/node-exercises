const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag-o-loot.sqlite');

module.exports = (toy, name) => {
  console.log("add toy function called!");
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO toys VALUES (null, "${toy}", "${name}", 0, 0)`,
      function(error, data){
        resolve({id: this.lastID})
      }
    )
  })
}

