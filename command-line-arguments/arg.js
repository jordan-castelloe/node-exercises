let [, , ...numbers] = process.argv;

const getSum = (total, currentNumber) => total + currentNumber;

console.log(numbers.reduce(getSum));
