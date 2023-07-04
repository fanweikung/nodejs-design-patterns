var Store = require("./Store");
var inventory = require("./inventory");

var skiShop = new Store("Steep and Deep", inventory);

var searchItem = "ski hats";
var results = skiShop.find(searchItem);

console.log(results);
