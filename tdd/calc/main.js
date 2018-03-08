
let operator = process.argv[2];
let numOne = +process.argv[3];
let numTwo = +process.argv[4];

const calculate = (operator, numOne, numTwo) => {
  // check for weird inputs
  if(!operator || !numOne || !numTwo || typeof operator !== 'string' || typeof numOne !== 'number' || typeof numOne !== 'number'){
    return console.log("Please enter an operator and two numbers (example: add 1 1)")
  } else if (operator == "add"){
    operator = require('./add');
  } else if (operator == "subtract"){
    operator = require('./subtract');
  } else if (operator == "./divide"){
    operator = require('./divide');
  } else if (operator == "multiply"){
    operator = require('./multiply');
  };
  console.log(operator(numOne, numTwo));
}

calculate(operator, numOne, numTwo);