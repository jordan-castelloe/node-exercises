const faker = require('faker');

module.exports.generateComputers= () => {
  let computers = [];
  for (let i = 0; i < 30; i++) {
    let purchaseDate = faker.date.past();
    let decommissionDate = faker.date.future();
    computers.push({purchaseDate, decommissionDate});
  }
  return computers;
};