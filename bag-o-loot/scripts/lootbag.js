
[,, ...args] = process.argv;
const add = require('./addToy');
const remove = require('./removeToys');
const listKid = require('./listOneKidsToys');
const list = require('./listAllKids');
const setDeliveryStatus = require('./deliveryStatus');

const printInstructions = () => {
  console.log("Instructions!");
}

switch (args[0]) {
  case "add":
    let toy = args[1];
    let name = args[2];
    add(toy, name);
    break;
  case "remove":
    let name = arg[1];
    let toy = arg[2];
    remove(name, toy);
    break;
  case "ls":
   if(arg[1]){
     let name = arg[1];
     listKid(name);
   } else {
     list();
   }
  case "delivered":
    let name = arg[1];
    setDeliveryStatus(name);
    break;
  default:
    printInstructions();
}