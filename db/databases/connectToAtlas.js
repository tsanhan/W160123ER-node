const mongoose = require('mongoose');
const chalk = require('chalk');


// Connect to MongoDB
mongoose.connect("mongodb+srv://victor:123qweQWE%21%40%23@hackeru.5akvv0m.mongodb.net/business-card-app")
.then(() => {
    console.log(chalk.green("Connected to Atlas MongoDB"));
})
.catch((err) => {
    console.log(chalk.redBright("Error connecting to Atlas MongoDB"));
    console.log(chalk.redBright(err));
});