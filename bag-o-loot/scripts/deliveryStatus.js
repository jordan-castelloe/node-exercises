const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag-o-loot.sqlite');

module.exports = (name) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE toys SET delivered=1 WHERE name="${name}"`,
      function (error, data) {
        resolve(data);
      }
    )
  })
}
