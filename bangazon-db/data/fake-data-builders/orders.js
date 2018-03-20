const faker = require('faker');

module.exports.generateOrders= (customerLength, paymentLength) => {
  let orders = [];
  for (let i = 0; i < 100; i++) {
    let active = false;
    let customer_id = Math.floor(Math.random() * customerLength) + 1;
    let payment_id = Math.floor(Math.random() * paymentLength) + 1;
    orders.push({
      active,
      customer_id,
      payment_id
    });
  }
  return orders;
};