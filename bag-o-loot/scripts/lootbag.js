
[,, ...args] = process.argv;
const add = require('./addToy');
const remove = require('./removeToys');
const listByName = require('./listByName');
const list = require('./listAllKids');
const setDeliveryStatus = require('./deliveryStatus');

let toy = null;
let name = null;

const printInstructions = () => {
  console.log("Ho ho ho! It's me, Santa Claus! Definitely me. I'm in your computer.");
  console.log("Here are some commands you can give me:");
  console.log(" - Type 'add kite Suzy' to add a kite to Suzy's bag.");
  console.log(" - Type 'remove kite Suzy' to remove a kite from Suzy's bag.");
  console.log(" - Type 'ls' to see all of the kids who are getting gifts.");
  console.log(" - Type 'ls Suzy' to see all of the toys Suzy is getting.");
  console.log(" - Type 'delivered Suzy' when you've delivered all of Suzy's gifts.");
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
