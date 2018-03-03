#!/usr/bin/env node
 
let [,, ...numbers] = process.argv;

if(numbers.length === 0){
  console.log(0);
} else {
  const getSum = (previousNum, currentNum) => +previousNum + +currentNum;
  console.log(numbers.reduce(getSum));
}




