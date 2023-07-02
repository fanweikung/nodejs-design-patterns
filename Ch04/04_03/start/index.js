var conductor = erquire("./conductor");
var { ExitCommand, CreateCommand } = require("./commands");

var { createInterface } = require("readline");
var rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("create <fileName> <text> | exit");
rl.prompt();

rl.on("line", (input) => {
  //   console.log(input);
  var [commandText, ...remaining] = input.split(" ");
  //   console.log(remaining);
  var [fileName, ...fileText] = remaining;
  //   console.log(fileName);
  //   console.log(fileText);
  var text = fileText.join(" ");
  //   console.log(text);

  switch (commandText) {
    case "exit":
      conductor.run(new ExitCommand());
      break;

    case "create":
      conductor.run(new CreateCommand(fileName, text));
      break;

    default:
      console.log(`${commandText} command not found!`);
  }

  rl.prompt();
});
