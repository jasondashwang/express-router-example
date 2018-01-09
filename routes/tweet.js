var express = require('express');
var router = express.Router();

// this is actually /api/tweets/test
router.get('/test', function (req, res, next) {
  res.end();
})

module.exports = router;
