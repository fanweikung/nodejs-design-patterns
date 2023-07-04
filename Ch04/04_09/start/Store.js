class Store {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
  }
  subscribe(name) {
    this.subscribers.push(name);
  }
  sale(discount) {
    this.subscribers.forEach((observor) =>
      observor.notify(this.name, discount)
    );
  }
}

module.exports = Store;
