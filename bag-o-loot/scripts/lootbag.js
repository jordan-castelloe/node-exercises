
[,, ...args] = process.argv;
const add = require('./addToy');
const remove = require('./removeToys');
const listByName = require('./listByName');
const list = require('./listAllKids');
const setDeliveryStatus = require('./deliveryStatus');
let toy = null;
let name = null;

const printInstructions = () => {
  console.log("Instructions!");
}

switch (args[0]) {
  case "add":
    toy = args[1];
    name = args[2];
    add(toy, name)
      .then(data => {
        console.log(`You added ${toy} to ${name}'s bag!`)
      })
    break;
  case "remove":
    name = args[1];
    toy = args[2];
    remove(name, toy)
      .then(data => {
        console.log(`You removed ${toy} from ${name}'s bag!`);
      })
    break;
  case "ls":
   if(args.length > 1){
     name = args[1];
     listByName(name)
        .then(data => {
          console.log(`These are all of ${name}'s toys:`);
          data.forEach(toyData => {
            console.log(toyData.toy);
          })
        })
   } else {
     list()
      .then(data => {
        data.forEach(toyData => {
          console.log(`${toyData.name} is getting a ${toyData.toy}!`)
        })
      })
   }
   break;
  case "delivered":
    name = args[1];
    setDeliveryStatus(name)
      .then(data => {
        console.log(`All of ${name}'s toys are delivered!`)
      })
    break;
  default:
    printInstructions();
}