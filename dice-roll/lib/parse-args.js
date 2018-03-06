// This parse - args file should export a single function to parse your command line arguments.The function should accept an array containing the arguments passed on the command line. Convert these arguments to an object with a count and sides property.
'use strict';

module.exports = (args) => {

let count = null;
let sides = null;

// if there are no arguments passed in, roll one six-sided dice
if(args.length === 0){
  count = 1;
  sides = 6;
} else if (args.length === 1) { // if only one arguemnt is passed in, that becomes the number of sides on the dice
  count = 1;
  sides = args[0];
} else if (args.length === 2){ // if two arguments are passed in, the first one is the number of times you roll the dice and the second argument is the number of sides
  count = args[0];
  sides = args[1];
} else {
  console.log("Please pass in no more than two numbers!")
}

let dice = {count, sides};
return dice;

}