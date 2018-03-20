const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bangazon.sqlite");
const { readFileSync } = require("fs");

const computers = JSON.parse(readFileSync("./data/json/computers.json"));
const customers = JSON.parse(readFileSync("./data/json/customers.json"));
const departments = JSON.parse(readFileSync("./data/json/departments.json"));
const employee_computers = JSON.parse(readFileSync("./data/json/employee-computers.json"));
const employee_trainings = JSON.parse(readFileSync("./data/json/employee-trainings.json"));
const employees= JSON.parse(readFileSync("./data/json/employees.json"));
const orders= JSON.parse(readFileSync("./data/json/orders.json"));
const payment_types= JSON.parse(readFileSync("./data/json/payment-types.json"));
const product_orders= JSON.parse(readFileSync("./data/json/product-orders.json"));
const product_types= JSON.parse(readFileSync("./data/json/product-types.json"));
const products = JSON.parse(readFileSync("./data/json/products.json"));
const training_programs = JSON.parse(readFileSync("./data/json/training-programs.json"));

// CREATE COMPUTERS TABLE
db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS computers`);
  db.run(`CREATE TABLE IF NOT EXISTS computers (
    computer_id INTEGER PRIMARY KEY,
    purchase_date TEXT,
    decommission_date TEXT)`);
  // TODO: registers date as undefined
  computers.forEach(({ computer_id, purchase_date, decommission_date }) => {
    db.run(`INSERT INTO computers VALUES (
    ${null},
    "${purchase_date}", 
    "${decommission_date}"
    )`);
  });
});

// CREATE CUSTOMERS TABLE
db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS customers`);
  db.run(`CREATE TABLE IF NOT EXISTS customers (
    customer_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    phone TEXT,
    email TEXT,
    addressCity TEXT,
    addressState TEXT,
    addressZip INTEGER,
    creationDate TEXT
  )`);
  customers.forEach(({ first_name, last_name, phone, email, addressCity, addressState, addressZip, creationDate }) => {
    db.run(`INSERT INTO customers VALUES (
      ${null},
      "${first_name}",
      "${last_name}",
      "${phone}",
      "${email}",
      "${addressCity}",
      "${addressState}",
      ${addressZip},
      "${creationDate}"
    )`);
  });
});

// CREATE DEPARTMENTS TABLE
db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS departments`);
  db.run(`CREATE TABLE IF NOT EXISTS departments (
       dept_id INTEGER PRIMARY KEY,
       name TEXT)`);
  departments.forEach(({ name }) => {
    db.run(`INSERT INTO departments VALUES (
      ${null},
      "${name}"
    )`);
  });
})

// CREATE EMPLOYEE-COMPUTER TABLE
db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS employee_computer`);
  db.run(`CREATE TABLE IF NOT EXISTS employee_computer (
       id INTEGER PRIMARY KEY,
       employee_id FORIEGN KEY,
      computer_id FORIEGN KEY)`);
  employee_computers.forEach(({ employee_id, computer_id }) => {
    db.run(`INSERT INTO employee_computer VALUES (
       ${null},
      ${employee_id},
      ${computer_id}
    )`);
  });
})

// CREATE EMPLOYEE-TRAINING TABLE
db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS employee_training`);
  db.run(`CREATE TABLE IF NOT EXISTS employee_training (
       id INTEGER PRIMARY KEY,
       employee_id FORIEGN KEY,
      training_id FORIEGN KEY)`);
  employee_trainings.forEach(({ employee_id, training_id }) => {
    db.run(`INSERT INTO employee_training VALUES (
       ${null},
      ${employee_id},
      ${training_id}
    )`);
  });
})

// CREATE EMPLOYEES TABLE
db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS employees`);
  db.run(`CREATE TABLE IF NOT EXISTS employees (
    employee_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    supervisor TEXT,
    department_id FORIEGN KEY)`);
  employees.forEach(({ first_name, last_name, supervisor, department_id }) => {
    db.run(`INSERT INTO employees VALUES (
       ${null},
      "${first_name}",
      "${last_name}",
      "${supervisor}",
      ${department_id}
    )`);
  });
})


//TODO:

// CREATE ORDERS TABLE
// CREATE PRODUCT-ORDERS TABLE
// CREATE PRODUCTS TABLE
// CREATE PRODUCTS TABLE
// CREATE TRAINING-PROGRAM TABLE
// CREATE PAYMENT TYPES TABLE
// CREATE PRODUCT TYPES TABLE
