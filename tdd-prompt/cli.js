'use strict';

const prompt = require('prompt');
const colors = require('colors/safe');
const { addNewProgram, getAllPrograms } = require('./model')

prompt.message = colors.blue("Bangazon Continuing Ed Course Creator\n")

// TODO: validate the user's choice
const prompts = {
  properties:{
    menuOption: {
      name: "menuOption",
      description: colors.green("Please choose one of the following: \n 1. Create a new course \n 2. View all courses\n"),
      message: "Please choose one of the options listed above."
    },
    programName: {
      name: "program_name",
      description: colors.green("Cool, let's create a new training program. What do you want to call this course?\n"),
      ask: () => prompt.history('menuOption').value === '1'
    },
    startDate: {
      name: "start_date",
      description: colors.green("When does the course start?\n"),
      ask: () => prompt.history('menuOption').value === '1'
    },
    endDate: {
      name: "end_date",
      description: colors.green("And when will it end?\n"),
      ask: () => prompt.history('menuOption').value === '1'
    },
    maxAttendees: {
      name: "max_attendees",
      description: colors.green("What's the maximum number of people you want in this course?\n"),
      ask: () => prompt.history('menuOption').value === '1'
    }
  }
};

prompt.start();

prompt.get(prompts, (err, {menuOption, programName, startDate, endDate, maxAttendees}) => {
  if(menuOption === '1'){ // ADD NEW PROGRAM
    addNewProgram(programName, startDate, endDate, maxAttendees)
    .then(id => {
      console.log(`You just added a new program with an id of ${id}`);
    })
  } else if (menuOption === '2') { // GET ALL PROGRAMS
    getAllPrograms()
    .then(programs => {
      console.log("Okay, here are all the programs!");
      programs.forEach(program => {
        console.log("Name: ", program.title, " Start Date: ", program.start_date, " End Date: ", program.end_date, " Max Attendees: ", program.max_attendees);
        console.log("    ");
      })
    })
  }
})


