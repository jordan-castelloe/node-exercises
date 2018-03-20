const { createWriteStream } = require('fs');

// pre-built json files
const { productTypes } = require('./data/json/product-types');
const { paymentTypes } = require('./data/json/payment-types');

// fake data
const { generateComputers } = require('./data/fake-data-builders/computers');
const { generateCustomers } = require('./data/fake-data-builders/customers');
const { generateDepartments } = require('./data/fake-data-builders/departments');
const { generateEmployeeComputers } = require('./data/fake-data-builders/employee-computer');
const { generateEmployeeTrainings } = require('./data/fake-data-builders/employee-training');
const { generateEmployees } = require('./data/fake-data-builders/employees');
const { generateOrders } = require('./data/fake-data-builders/orders');
const { generateProductOrders} = require('./data/fake-data-builders/product-order');
const { generateProducts } = require('./data/fake-data-builders/products');
const { generateTrainingPrograms } = require('./data/fake-data-builders/training-programs');


// create computers
let computers= generateComputers();
let computerStream = createWriteStream(`data/json/computers.json`);
computerStream.write(JSON.stringify(computers));

const createData = (method, destination, argumentsArray) => {
  let data = null;
  if(argumentsArray.length === 0){
    data = method();
  }else if(argumentsArray.length === 1){
    let arg0 = argumentsArray[0];
    data = method(arg0);
  } else if (argumentsArray.length === 2){
    let arg0 = argumentsArray[0];
    let arg1 = argumentsArray[1];
    data = method(arg0, arg1)
  }
  console.log("arguments", argumentsArray);
  console.log('data', data);

  let stream = createWriteStream(destination);
  stream.write(JSON.stringify(data));
}

createData(generateCustomers, 'data/json/customers.json', []);
createData(generateDepartments, 'data/json/departments.json', []);
createData(generateEmployeeComputers, 'data/json/employee-computers.json', [generateEmployees(generateDepartments().length).length, generateComputers().length]);
createData(generateEmployeeTrainings, 'data/json/employee-trainings.json', [generateEmployees(generateDepartments().length).length, generateTrainingPrograms().length]);
createData(generateEmployees, 'data/json/employees.json', [generateDepartments().length]);
createData(generateOrders, 'data/json/orders.json', [generateCustomers().length, paymentTypes.length]);
createData(generateProductOrders, 'data/json/product-orders.json', [generateProducts(productTypes.length, generateCustomers().length).length, generateOrders(generateCustomers().length, paymentTypes).length]);
createData(generateProducts, 'data/json/products.json', [productTypes.length, generateCustomers().length]);
createData(generateTrainingPrograms, 'data/json/training-programs.json', []);
