const randomInt = require("../lib/math");
const {assert: {isFunction, isNumber, notEqual, isNotNaN, oneOf}} = require('chai');

describe("math module", () => {
  describe("randomInt()", () => {
    it('should be a function, duh', () => {
      isFunction(randomInt);
    });
    it('should return a nonzero random number', () => {
      isNumber(randomInt(2, 6));
      isNotNaN(randomInt("fred", 6));
      notEqual(0, randomInt(1, 6));
      for (let i = 0; i< 10000; i++){
        oneOf(randomInt(1,6), [1, 2, 3, 4, 5, 6])
      }
    });
  });
});