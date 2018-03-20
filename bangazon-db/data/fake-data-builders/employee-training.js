module.exports.generateEmployeeTrainings = (employeesLength, trainingLength) => {
  let employeeTrainings = [];
  for (let i = 0; i < 1000; i++) {
    let employee_id = Math.floor(Math.random() * employeesLength) + 1;
    let training_id = Math.floor(Math.random() * trainingLength) + 1;

    employeeTrainings.push({ employee_id, training_id });
  }
  return employeeTrainings;
};