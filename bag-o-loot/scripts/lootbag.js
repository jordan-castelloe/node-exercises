
[,, ...args] = process.argv;
const add = require('./addToy');
const remove = require('./removeToys');
const listByName = require('./listByName');
const list = require('./listAllKids');
const setDeliveryStatus = require('./deliveryStatus');
let toy = null;
let name = null;

console.log("args", args);

const printInstructions = () => {
  console.log("Instructions!");
}

switch (args[0]) {
  case "add":
    toy = args[1];
    name = args[2];
    add(toy, name);
    break;
  case "remove":
    name = args[1];
    toy = args[2];
    remove(name, toy);
    break;
  case "ls":
   if(args.length > 1){
     name = args[1];
     listByName(name);
   } else {
     list();
   }
  case "delivered":
    name = args[1];
    setDeliveryStatus(name);
    break;
  default:
    printInstructions();
}