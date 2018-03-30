const {getAllPrograms, addNewProgram} = require('../model.js');
const { buildDatabase } = require('../build-db')
const { assert: { equal, isFunction, isArray, isObject, isNumber } } = require('chai');

describe("model", () => {
  describe("getAllPrograms()", () => {
    it('should return an array of objects', () => {
      return getAllPrograms()
      .then(programs => {
        isArray(programs);
        isObject(programs[0]);
      });
    });
  });
  describe("addNewProgram()", () => {
    let testId = null;
    it('should return a number id', () => {
      return addNewProgram("New Course", "2-2-22", "3-2-22", 22)
      .then(id => {
        isNumber(id);
        testId = id;
      });
    });
    it('should have posted the new item to the database', () => {
      return getAllPrograms()
      .then(programs => {
        equal(programs[programs.length-1].program_id, testId);
      });
    });
  });
})
