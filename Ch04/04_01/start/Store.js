var Storage = require("./Storage");

class Store {
  constructor(name, inventory = []) {
    this.name = name;

    var floor = new Storage("store floor", inventory.floor);
    var backroom = new Storage("store backroom", inventory.backroom);
    var localStore = new Storage("local store", inventory.localStore, 1);
    var warehouse = new Storage("warehouse", inventory.warehouse, 5);

    floor.setNext(backroom);
    floor.setNext(localStore);
    floor.setNext(warehouse);

    this.floor = floor;
  }

  find(itemName) {
    return this.Storage.find(itemName);
  }
}

module.exports = Store;
