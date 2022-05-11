/*  for case route has root address without '/state...'
    It will return the html page
    code provide by Professor Dave Gray */

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;