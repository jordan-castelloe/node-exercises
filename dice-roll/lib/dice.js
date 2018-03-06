// The dice file should export an object with at least two methods called roll and toDiceNotation.The toDiceNotation method should accept an object with a sides and count property and convert it to a String with the dice notation i.e. "1d6" or "2d40".The roll method should accept a dice notation String and produce a random Number which is the result of the dice roll.

const math = require('./math');

module.exports.roll = (diceString) => {
  let diceStringArray = diceString.split('d');
  let count = +diceStringArray[0];
  let sides = +diceStringArray[1];
  let roll = math(count, sides);
  return roll;
}

module.exports.toDiceNotation = ({count, sides}) => {
  let notation = `${count}d${sides}`;
  return notation;
}

