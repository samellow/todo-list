const mongoose = require('mongoose');

const MONGODB_URL = ''

const connectToMongoDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL || MONGODB_URL);
        console.log('connected to database');
    } catch (error) {
        console.log('error connecting to database', error.message);

    }
}

module.exports = connectToMongoDB;