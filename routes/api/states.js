/*  for case route has root address followed by '/state...'
    It will redirect to controllers */

const express = require('express');
const router = express.Router();
const statesController = require('../../controllers/statesController');
//const funFactsController = require('../../controllers/funFactsController');
//const verifyState = require('../../middleware/verifyState');


router.route('/').get(statesController.getAllStates)


module.exports = router;