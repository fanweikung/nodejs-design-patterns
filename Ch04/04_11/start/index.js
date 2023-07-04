var logger = require("./Logger");

logger.log("Hello World");
logger.log("Hi World");
logger.log("Yo World");

logger.changeStrategy("toFile");

logger.log("Yo World");
logger.log("Hi World");
logger.log("Hello World");
