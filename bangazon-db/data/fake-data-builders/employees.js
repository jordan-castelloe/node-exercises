const faker = require('faker');

module.exports.generateEmployees = (departmentsLength) => {
  let employees = [];
  for (let i = 0; i < 100; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let supervisor = false;
    let department_id = Math.floor(Math.random() * departmentsLength) + 1;


    employees.push({
      "first_name": firstName,
      "last_name": lastName,
      supervisor,
      department_id
    });
  }

  return employees;
};