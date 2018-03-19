module.exports.generateEmployeeComputers = (employeesLength, computersLength) => {
  let employeeComputers = [];
  for (let i = 0; i < 1000; i++) {
    let employee_id = Math.floor(Math.random() * employeesLength) + 1;
    let computer_id = Math.floor(Math.random() * computersLength) + 1;

    employeeComputers.push({employee_id, computer_id});
  }
  return employeeComputers;
};