// Items can be removed from bag, per child only.Removing ball from the bag should not be allowed.A child's name must be specified.

const { createTables } = require('../scripts/makeTable');
const { assert: { notPropertyVal } } = require('chai');
const removeToy = require('../scripts/removeToys');
const listByName = require('../scripts/listByName')

describe('removing toys from the database', () => {
  afterEach((done) => {
    createTables()
      .then(() => {
        done();
      })
  })
  it('should remove toy from the database', () => {
    let toy = "doll";
    let name = "Tanya";
    return removeToy(name, toy)
    .then(data => {
      return listByName(name);
    })
    .then(toys => {
      toys.forEach(toy => {
        notPropertyVal(toy, 'name', name);
        notPropertyVal(toy, 'toy', toy);
      });
    })
  })
})
