var scout_prototype = require("./scout_prototype");

var alex = new scout_prototype.clone();
alex.name = "Alex Bank";
alex.addItemToList("slingshot");

var eve = new scout_prototype.clone();
eve.name = "Eve Porcello";
eve.addItemToList("reading light");

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);
