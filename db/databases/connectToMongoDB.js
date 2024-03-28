const mongoose = require('mongoose');
const chalk = require('chalk');


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/business-card-app")
.then(() => {
    console.log(chalk.green("Connected to MongoDB"));
})
.catch((err) => {
    console.log(chalk.redBright("Error connecting to MongoDB"));
    console.log(chalk.redBright(err));
});