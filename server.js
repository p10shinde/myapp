const express = require("express");
const app = express();
const path = require('path');

app.use(expres.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);


//pathLocationStrategy

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log('Server started on!');
