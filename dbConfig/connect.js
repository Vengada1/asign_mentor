const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://venkatnathan10:Varadhan1@cluster0.y7cewxm.mongodb.net/test';

mongoose.set('strictQuery', true);

const db = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Database Connection Established');
    } catch (error) {
        console.log('Error while connecting DB:', error);
    }
};

module.exports = db;
