var express = require('express');
var router = express.Router();
var ticketCtrl = require('../controller/tickets');

router.get('/flights/:id/tickets/new',ticketCtrl.new);
router.post('/ticket/:id',ticketCtrl.create);

module.exports = router;