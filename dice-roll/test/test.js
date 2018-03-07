const { assert } = require('chai');

describe("Array", () => {
  describe("indexOf()", () => {
  it ('should return an negative number if the thing is not in the array', () => {
    assert.equal(-1, [1, 2, 3].indexOf(4))
    });
  });

  describe("is not empty", () => {
    it ("should not be 0", () => {
      assert.notEqual(0, [1].length);
      assert.equal(3, [1, 2, 3].length)
    });
  });
});