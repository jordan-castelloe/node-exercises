// Must be able to list all toys for a given child's name.
const { assert: { isObject, isArray, propertyVal } } = require('chai');
const listByName = require('../scripts/listOneKidsToys');
const listAll = require('../scripts/listAllKids.js');

describe('List all the toys from a single kid', () => {
  let name = 'Sarah';
  it('should return an array of objects', () => {
    return listByName(name)
      .then(toys => {
        isArray(toys);
        isObject(toys[0]);
      })
  });
  it('should return toys associated with the given name', () => {
    return listByName(name)
      .then(toys => {
        toys.forEach(toy => {
          propertyVal(toy, 'name', name);
        })
      })
  });
})