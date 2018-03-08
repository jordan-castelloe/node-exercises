const subtract = require("../calc/subtract.js");
const { assert: { equal } } = require('chai');

describe("subtract module", () => {
  describe("subtract()", () => {
    it('should subtract the second number from the first number', () => {
      equal(3, subtract(10, 7));
    })
  });
});