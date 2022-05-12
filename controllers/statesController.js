/*  this controller has most of the operations */


//returns all data
const statesJSON = require('../model/states.json');

const getAllStates = async (req, res) => {

    // get all the states datafrom statesJSON as array
    let allStates = statesJSON;

    res.json(allStates);
}


module.exports = { getAllStates }

