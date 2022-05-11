/*  this controller has most of the operations */

//const State = require('../model/State');
//const statesJSON = require('../model/states.json');

//returns all data


const statesJSON = require('../model/states.json');

const getAllStates = async (req, res) => {

    // get all the states datafrom statesJSON as array
    let statesList = statesJSON;

    res.json(statesList);
}


module.exports = { getAllStates }

