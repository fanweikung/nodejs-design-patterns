var LogStrategy = require("./LogStrategy");

class Logger {
  constructor() {
    this.logs = [];
    this.strategy = LogStrategy.toConsole;
  }

  get count() {
    return this.logs.length;
  }

  changeStrategy(newStrategy) {
    this.strategy = LogStrategy[newStrategy];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    // console.log(`${timestamp} - ${message}`);
    this.strategy(timestamp, message);
  }
}

module.exports = new Logger();
