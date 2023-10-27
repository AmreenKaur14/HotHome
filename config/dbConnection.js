const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const dbconnection = mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Hurrey!! Connected to MongoDB Database!!!');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

module.exports = dbconnection;