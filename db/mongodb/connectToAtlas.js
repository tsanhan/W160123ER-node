const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("config");

const userName = config.get("DB_NAME");
const password = config.get("DB_PASSWORD");

 async function connect() {
  return mongoose
    .connect(`mongodb+srv://${userName}:${password}@hackeru.5akvv0m.mongodb.net/`)
    .then(() => console.log(chalk.magentaBright("connected to Atlas MongoDb!")))
    .catch((error) => console.log(chalk.redBright.bold(`could not connect to mongoDb: ${error}`)));
};

module.exports = connect;