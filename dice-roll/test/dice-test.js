const dice = require("../lib/dice");
const { assert: { isFunction, isNumber, isNotNaN, isString, isDefined} } = require('chai');

describe("dice module", () => {
  describe("roll()", () => {
    it('should be a function, duh', () => {
      isFunction(dice.roll);
    });
    it('should return a number', () => {
      isNumber(dice.roll('2d40'));
      isNotNaN(dice.roll('2d40'));
    });
  });
  describe("toDiceNotation()", () => {
    it('should return a string', ()=> {
      isString(dice.toDiceNotation(2, 5))
    });
    it('should handle input other than numbers', ()=> {
      isDefined(dice.toDiceNotation("Fred", "Jenny"))
    });
  });
});