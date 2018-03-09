// Must be able to list all children who are getting a toy.

const { assert: { isArray, isObject } } = require('chai');
const listAll = require('../scripts/listAllKids');

describe('List all kids', () => {
  it('should return an array of objects', () => {
    return listAll()
      .then(kids => {
        isArray(kids);
        isObject(kids[0]);
      })
  })
})
