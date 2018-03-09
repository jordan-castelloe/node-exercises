// Items can be added to bag.
const { createTables } = require('../scripts/makeTable');
const { assert: { isFunction, equal, isObject } } = require('chai');
const addToy = require('../scripts/addToy')

describe('Adding a toy to the database', () => {
  let toy = "furby";
  let name = "Jane";
  beforeEach((done) => {
    createTables()
      .then(() => {
        done();
      })
  })
  it('should be a function', () => {
    isFunction(addToy);
  })
  it('should return an object with a property of 5', () => {
    return addToy(toy, name)
    .then(toyObj => {
      equal(5, toyObj.id)
    })
  })
})
