var express = require('express');
var app = express();
var db = require('./db/index.js');
var bodyParser = require('body-parser');
var port = 3000
var path = require('path');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/dist')))


app.get('/cows', (req, res) => {
  db.Cows.findAll()
  .then(cows => {
    res.send(cows);
  });
});



app.get('/cows', (req, res) => {
  db.Cows.create({
    name: req.body.name,
    pictureUrl: req.body.pictureUrl,
    description: req.body.description
  }).then((cow) => {
    res.send(cow);
  })
});

app.post('/cows', (req, res)  => {
  db.Cows.create({
    name: req.body.name,
    pictureUrl: req.body.pictureUrl,
    description: req.body.description
  }).then(cow => {
    res.send(cow);
  })
});

app.listen(port, () => console.log(`app listening on port ${port}!`));