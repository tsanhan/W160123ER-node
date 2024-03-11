const express = require('express');
const app = express();
const chalk = require('chalk');

app.use(express.json());
app.use(express.text());
app.use(express.static('./public', {
    maxAge: 1000 * 60 * 60 * 24 * 7,
}));

// Middleware Tasks
// 1. execute code (because it's a function)
// 2. optionally modify the request and response objects
// 3. end the request-response cycle
// 4. call the next middleware in the stack


// Middleware Types
// 1. Application-level middleware - I write what I wanna
// 2. Router-level middleware - I configure routes
// 3. Error-handling middleware - I handle errors
// 4. Built-in middleware - I use what's provided (like json, static, etc.)
// 5. Third-party middleware - I use what's available on npm (like morgan, helmet, etc.)


// first middleware
// app.use((req, res, next) => {
//     console.log(chalk.blue('This is the first middleware.'));
//     next(); // call the next middleware in the stack
// }, (req, res, next) => {
//     console.log(chalk.yellow('This is the first middleware, second function.'));
//     next(); // call the next middleware in the stack
// }, (req, res, next) => {
//     console.log(chalk.red('This is the first middleware, third function.'));
//     next(); // call the next middleware in the stack
// });

// route as a middleware
// app.get('/', (req, res, next) => {
//     console.log(chalk.green('in get / route'));
//     next();
// });

// middleware get headers
app.use((req, res, next) => {
    console.log(chalk.blue('This is a middleware.'));
    console.log(req.headers);
    next(); // call the to function in the route because there is no more middlewares
});

// middleware get params
app.use('/:id', (req, res, next) => {
    console.log(chalk.blue('This are the params:'));
    console.log(req.params);
    next(); // call the to function in the route because there is no more middlewares
});

// middleware get query params
app.use((req, res, next) => {
    console.log(chalk.blue('This is query:'));
    console.log(req.query);
    next(); // call the to function in the route because there is no more middlewares
});

// middleware to add custom ket in request
app.use((req, res, next) => {
    req.user = { id: 123, name: 'John Doe' };
    console.log(chalk.blue('user in request:'), req.user);
    next(); // call the to function in the route because there is no more middlewares
});

// middleware to get body
app.use((req, res, next) => {
    console.log(chalk.blue('this is the body.'), req.body);
    next(); // call the to function in the route because there is no more middlewares
});

app.get('/', (req, res, next) => {
    try {
        res.status(200).send({ message: 'Hello World'});
    } catch (error) {
        res.status(500).json({ error: 'you don\'t know math' });
    }
    console.log(chalk.magenta(typeof Infinity));
});

// app.post('/', (req, res, next) => {
//     console.log(chalk.yellow('in post / route'));
//     res.send('Hello World');
//     next();
// });
// app.patch('/', (req, res, next) => {
//     console.log(chalk.magenta('in patch / route'));
//     next();
// });


const PORT = process.env.PORT || 8181;
app.listen(PORT, () => {
    console.log(chalk.green(`Listening on: http://localhost:${PORT}`));
});