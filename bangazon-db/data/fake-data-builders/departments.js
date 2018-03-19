const faker = require('faker');

module.exports.generateDepartments = () => {
  let departments = [];
  for (let i = 0; i < 5; i++) {
    let name = faker.commerce.department();
    departments.push({
      name
    });
  }
  return departments;
};