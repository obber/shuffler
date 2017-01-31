var express = require('express');
var bodyParser = require('body-parser');

var randomize = require('./randomize');

var port = process.env.PORT || 4000;
var app = express();

app.use(bodyParser.json());

app.post('/randomize', function(req, res) {
  let { names } = req.body;
  console.log('names = ', names);
  res.json({
    success: true,
    list   : randomize(names)
  });
});

app.use(express.static('client'));

app.listen(port);
console.log(`Express server listening on port ${port}`);
