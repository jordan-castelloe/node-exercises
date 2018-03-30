const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("training.sqlite");

module.exports.getAllPrograms = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM training_programs`, 
    function(err, programs){
        if (err) return reject(err);
        resolve(programs);
      });
  })
}

module.exports.addNewProgram = (title, startDate, endDate, max) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO training_programs
    VALUES (null, "${title}", "${startDate}", "${endDate}", ${max})`, 
    function (err){
        if (err) return reject(err);
        resolve(this.lastID);
      });
  })
}