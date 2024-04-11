const chalk = require('chalk');
const {createCard} = require('../cards/models/cardsAccessDataService');
const data = require('./initialData.json');
const { registerUser } = require('../users/models/usersAccessDataService');

const generateInitialDataCards = async () => {
    const {cards} = data;
    cards.forEach(async card => {
        try {
            await createCard(card);
        } catch (error) {
            console.log(chalk.red(error.message));
        }
    });
}
const generateInitialDataUsers = async () => {
    const {users} = data;
    users.forEach(async user => {
        try {
            await registerUser(user);
        } catch (error) {
            console.log(chalk.red(error.message));
        }
    });
}

const generateInitialData = async () => {
    // check if data already exists
    await generateInitialDataCards();

    // check if data already exists
    await generateInitialDataUsers();
}

exports.generateInitialData = generateInitialData;