const faker = require('faker');

module.exports.generateCustomers = () => {
  let customers = [];
  for (let i = 0; i < 100; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let phoneNumber = faker.phone.phoneNumberFormat();
    let email = faker.internet.email();
    let addressStreet = faker.address.streetAddress();
    let addressCity = faker.address.city();
    let addressState = faker.address.state();
    let addressZip = faker.address.zipCode();
    let creationDate = faker.date.past();


    customers.push({
      "first_name": firstName,
      "last_name": lastName,
      "phone": phoneNumber,
      email,
      addressCity,
      addressState,
      addressZip,
      creationDate
    });
  }

  return customers;
};