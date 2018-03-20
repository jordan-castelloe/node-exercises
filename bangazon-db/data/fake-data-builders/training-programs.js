const faker = require('faker');

module.exports.generateTrainingPrograms = () => {
  let trainingPrograms = [];
  for (let i = 0; i < 25; i++) {
    let start = faker.date.past();
    let finish = faker.date.future();
    let capacity = Math.floor(Math.random() * 100); 
    let description = faker.lorem.sentence();
    trainingPrograms.push({
      start,
      finish,
      capacity,
      description
    });
  }
  return trainingPrograms;
};