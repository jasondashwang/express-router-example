var express = require('express');
var router = express.Router();

// this is actually /api/something
router.get('/something', function (req, res, next) {
  res.end();
})

router.use('/tweets', require('./tweet'));
router.use('/users', require('./user'));

module.exports = router;
