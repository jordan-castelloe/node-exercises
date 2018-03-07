const divide = require("../calc/divide.js");
const { assert: { equal } } = require('chai');

describe("divide module", () => {
  describe("divide()", () => {
    it('should divide the first arguement by the second', () => {
      equal(5, divide(10, 2));
    })
  });
});