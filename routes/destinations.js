var flight = require('../models/flight');

module.exports = {
    create
};

function create(req,res) {
    flight.findById(req.params.id)
}