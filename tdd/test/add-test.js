const add = require("../calc/add.js");
const { assert: { equal, isFunction } } = require('chai');

describe("add module", () => {
  describe("add()", () => {
    it('should be a function', () => {
      isFunction(add);
    });
    it('should add its two arguments together', () => {
      equal(4, add(2, 2));
    })
  });
});