const ENV = process.env.ENVIRONMENT || 'dev';

const connectToDB = () => {
    if(ENV === 'dev') require('./databases/connectToMongoDB');
    if(ENV === 'prod') require('./databases/connectToAtlas');
};

module.exports = connectToDB;
