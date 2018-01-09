var express = require('express');
var router = express.Router();

// this is actually /api/users/test
router.get('/test', function (req, res, next) {
  res.end();
})

module.exports = router;
