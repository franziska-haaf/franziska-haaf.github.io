var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Franziska Haaf' });
});

router.get('/adtonic', function (req, res) {
  res.render('adtonic', { title: 'TONIC. for advertisers' });
})

module.exports = router;
