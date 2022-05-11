/*  this file will allow requests from this sorces to pass through'
    code provide by Professor Dave Gray */

const allowedOrigins = [
    'https://www.yoursite.com',
    'http://127.0.0.1:5500',
    'http://localhost:3500',
    'http://localhost:3000'
];

module.exports = allowedOrigins;