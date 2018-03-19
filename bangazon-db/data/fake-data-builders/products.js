const faker = require('faker');

module.exports.generateProducts = (typesLength, customersLength) => {
  let products = [];
  for (let i = 0; i < 25; i++) {
    let title = faker.commerce.productName();
    let price = faker.commerce.price();
    let description = faker.lorem.sentence();
    let type_id = Math.floor(Math.random() * typesLength) + 1;
    let customer_id = Math.floor(Math.random() * customersLength) + 1;

    products.push({
      title,
      price,
      description,
      type_id,
      customer_id
    });
  }
  return products;
};