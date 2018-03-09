// Must be able to set the delivered property of a child, which defaults to false to true.
const { createTables } = require('../scripts/makeTable');
const { assert: {propertyVal} } = require('chai');
const setDeliveryStatus= require('../scripts/deliveryStatus')
const listByName = require('../scripts/listByName');

describe('Setting a toy as delivered', () => {
  let name = 'Sarah';
  afterEach((done) => {
    createTables()
      .then(() => {
        done();
      })
  })
  it('should update the delivery status from 0 to 1 of ALL the toys for the given name', () => {
    return setDeliveryStatus(name)
    .then(data => {
      return listByName(name);
    })
    .then(toys => {
      toys.forEach(toy => {
        propertyVal(toy, 'delivered', 1);
      });
    });
  });
});