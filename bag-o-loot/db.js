(function createDB() {
  new sqlite3.Database('acme.sqlite', () => {
    createTables()
      .then(data => {
        console.log("dot then!");
        console.log("customer ids", data);
      })
      .catch(err => {
        console.log("oops", err);
      })
  })
}());