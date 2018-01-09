var express = require('express');
var app = express();

app.use('/api', require('./routes'));

app.listen(8000, function () {
  console.log('server is running');
})
