// express
const express = require('express');
const app = express();
const chalk = require('chalk');
const mongoose = require('mongoose');
const { date, array, required, bool } = require('joi');
const { trim, lowerCase, min } = require('lodash');

// this is the schema creation part.
const nameSchema = new mongoose.Schema({
    first: {
        type: String,
        trim: true,
    },
    last: {
        type: String,
        trim: true,
    }
});

const schema = new mongoose.Schema({
    string: String,
    number: Number,
    bool: Boolean,
    date: {type: Date, default: Date.now},
}); 
const Test = mongoose.model('test', schema); // this is the model creation part.

app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const {body} = req;
        const instance = new Test(body);
        await instance.save();
        res.send(instance);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});

const PORT = process.env.PORT || 8989;

app.listen(PORT, () => {
    console.log(chalk.green(`Server is running on port ${PORT}`));
    mongoose.connect('mongodb://localhost:27017/mongoose-sandbox')
    .then(() => console.log(chalk.green('Connected to MongoDB')))
    .catch(err => console.log(chalk.red(err)));

});