const parseArgs= require("../lib/parse-args");
const { assert: { deepEqual, isObject, isNotObject } } = require('chai');

describe("parse-args module", () => {
  describe("parseArgs()", () => {
    it('should return {1, 6} if an empty array of args is passed in', () => {
      let args = [];
      deepEqual({count:1, sides:6}, parseArgs(args));
    });
    it('should return {count: 1, sides: arg} if one arg is passed in', () => {
      let args = [5];
      deepEqual({count: 1, sides:5}, parseArgs(args));
    });
    it('should return {count: arg1, sides: arg2} if two args are passed in', () => {
      let args = [5,6];
      deepEqual({count:5, sides:6}, parseArgs(args));
    });
    it ('should kick the user out if they pass in MORE than two numbers', () => {
      let args = [1, 2, 3];
      isNotObject(parseArgs(args));
    });
  });
});

// oneOf(roll(diceNotation), Array.from(Array(61).keys()))