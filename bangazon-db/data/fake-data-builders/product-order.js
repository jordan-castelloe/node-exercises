module.exports.generateProductOrders = (productLength, ordersLength) => {
  let productOrders = [];
  for (let i = 0; i < 1000; i++) {
    let product_id = Math.floor(Math.random() * productLength) + 1;
    let order_id = Math.floor(Math.random() * ordersLength) + 1;

    productOrders.push({ product_id, order_id });
  }
  return productOrders;
};