var path = require("path");
var { appendFile } = require("fs");

class LogStrategy {
  static noDate(timestamp, message) {
    console.log(message);
  }
  static toFile(timestamp, message) {
    var filename = path.join(__dirname, "logs.txt");
    appendFile(filename, `${timestamp} - ${message} \n`, (error) => {
      if (error) {
        console.log("Error writing to file");
        console.error(error);
      }
    });
  }
  static toConsole(timestamp, message) {
    console.log(`${timestamp} - ${message}`);
  }
  static none() {}
}

module.exports = LogStrategy;
