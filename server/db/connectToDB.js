const mongoose = require('mongoose');



const connectToMongoDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to database');
    } catch (error) {
        console.log('error connecting to database', error.message);

    }
}

module.exports = connectToMongoDB;