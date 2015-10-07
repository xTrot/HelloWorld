var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello World' });
});

router.get('/boot/', function(req, res, next) {
  res.render('boot/index', { title: 'Bootstraping!' });
});

module.exports = router;
