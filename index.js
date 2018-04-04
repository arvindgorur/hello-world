const express = require('express');
const app     = express();

app.set('view engine', 'ejs');

app.get('/', function (req,res) {
  res.render('index');
});

app.get('/HelloWorld', function (req,res) {
  res.render('HelloWorld');
  //res.send("Hello World");
});
app.listen(80, function () {
  console.log('Listening on port 80');
});
