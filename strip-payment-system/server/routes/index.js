var express = require('express');
var router = express.Router();

/* This is a rest api service, so there is no home page */
router.get('/', function(req, res, next) {
  res.render('index', { error: '401 Unauthorized Access' });
});

module.exports = router;
