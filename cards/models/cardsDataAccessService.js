// DAL
const DB = process.env.DB || 'MONGODB';

const getCards = async () => {
    if (DB === 'MONGODB') {
        try {
            return Promise.resolve("in the future, this will return cards from a MongoDB database. For now, it returns a string.");
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("get cards not in mongoDB");
}

const find = async () => {
    if (DB === 'MONGODB') {
        try {
            return Promise.resolve([{ name: "card1" }, { name: "card2" }]);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("find not in mongoDB");
}

const findOne = async (id) => {
    if (DB === 'MONGODB') {
        try {
            return Promise.resolve({ name: "card1", id });
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("findOne not in mongoDB");
}

const create = async (card) => {
    if (DB === 'MONGODB') {
        try {
            card._id = "123";
            return Promise.resolve(card);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("create not in mongoDB");
}

const findMyCards = async (userId) => {
    if (DB === 'MONGODB') {
        try {
            return Promise.resolve(`my cards ${userId}`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("findMyCards not in mongoDB");
}

exports.getCards = getCards;
exports.find = find;
exports.findOne = findOne;
exports.create = create;
exports.findMyCards = findMyCards;
