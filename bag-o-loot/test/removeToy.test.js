// Items can be removed from bag, per child only.Removing ball from the bag should not be allowed.A child's name must be specified.

const { createTables } = require('../scripts/makeTable');
const { assert: { notPropertyVal } } = require('chai');
const removeToy = require('../scripts/removeToys');
const listAll = require('../scripts/listAllKids')

describe('removing toys from the database', () => {
  afterEach((done) => {
    createTables()
      .then(() => {
        done();
      })
  })
  it('should remove toy from the database', () => {
    let toyId = 3;
    return removeToy(toyId)
    .then(data => {
      return listAll();
    })
    .then(allToys => {
      allToys.forEach(toy => {
        notPropertyVal(toy, 'toy_id', toyId);
      });
    })
  })
})
