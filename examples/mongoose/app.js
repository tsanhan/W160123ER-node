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

app.get('/', async (req, res) => { 
    try {
        const tests = await Test.find();
        res.send(tests);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});

app.get('/query', async (req, res) => { 
    try {
        const tests = await Test.find({ number: { $gte: 1, $lt: 3 }});
        res.send(tests);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});

app.get('/filter', async (req, res) => { 
    try {
        const tests = await Test.find({}, { string: 1, number: 1});
        res.send(tests);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});
app.get('/filter2', async (req, res) => { 
    try {
        const tests = await Test.find({}, { string: 0, number:0, _id: 0, __v: 0});
        res.send(tests);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});

app.get('/findOne/:id', async (req, res) => { 
    try {
        const {id} = req.params;
        const test = await Test.findOne({ _id: id });
        if (!test) return res.status(404).send('Not found');
    
        res.send(test);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});

app.get('/count', async (req, res) => { 
    try {
        const count = await Test.find().count();
        res.send({count});
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});

app.get('/select', async (req, res) => { 
    try {
        const tests = await Test.find().select(['string', 'number','-_id']);
        res.send(tests);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});

app.get('/sort', async (req, res) => { 
    try {
        const tests = await Test.find().sort({string: 1, number: -1});
        res.send(tests);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});

app.get('/selectAndSort', async (req, res) => {
    try {
        const tests = await Test.find()
            .select(['number',['-_id']])
            .sort({number: -1});
        res.send(tests);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});

app.get('/findById/:id', async (req, res) => {
    try {
        const  {id} = req.params;
        const tests = await Test.findById(id);
        if (!tests) return res.status(404).send('Not found');
        res.send(tests);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});

app.put('/findByIdAndUpdate/:id', async (req, res) => {
    try {
        const instance = await Test.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        console.log({instance});
        if (!instance) return res.status(404).send('Not found');
        res.send(instance);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
});

app.delete('/findByIdAndDelete/:id', async (req, res) => {
    try {
        const instance = await Test.findByIdAndDelete(req.params.id);
        
        if (!instance) return res.status(404).send('Not found');
        res.send(instance);
    } catch (error) {
        console.log(chalk.red(`Mongoose schema error: ${error.message}`));
        res.status(400).send(error.message);
    }
}
);

const PORT = process.env.PORT || 8989;

app.listen(PORT, () => {
    console.log(chalk.green(`Server is running on port ${PORT}`));
    mongoose
    .connect('mongodb://localhost:27017/mongoose-sandbox')
    .then(() => console.log(chalk.green('Connected to MongoDB')))
    .catch(err => console.log(chalk.red(err)));

});