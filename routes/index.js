var express = require('express');
var router = express.Router();
var mongodb =require('mongodb');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page' });
});

module.exports = router;
