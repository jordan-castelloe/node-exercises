const multiply = require("../calc/multiply.js");
const { assert: { equal } } = require('chai');

describe("multiply module", () => {
  describe("multiply()", () => {
    it('should multiply the two arguments together', () => {
      equal(20, multiply(10, 2));
    })
  });
});