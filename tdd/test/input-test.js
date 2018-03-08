const divide = require("../calc/mainjs");
const { assert: {isNotNull, isNotNaN } } = require('chai');

describe("main input module", () => {
  describe("calculate()", () => {
    it('should handle janky inputs', () => {
      isNotNull(calculate("add", "one", "one"));
      isNotNaN(calculate("add", 1));
      isNotNull(calculate(1, 1));
      isNotNaN(calculate(1, 1, 1));
    })
  });
});