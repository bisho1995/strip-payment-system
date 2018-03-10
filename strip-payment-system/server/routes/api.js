var express = require('express');

var stocks = require('./api/stocks');
var payment = require('./api/payment');

var router = express.Router();

/*
Routes for the api route
*/
router.use('/stocks', stocks);
router.use('/payment', payment);

module.exports = router;
