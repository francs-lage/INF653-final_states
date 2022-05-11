/*  Connects to the database using .env file located in root'
    code provide by Professor Dave Gray */

const mongoose = require('mongoose');

// Connects to the database using .env file located in root
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB