const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = new express();

const moodDiaries = require('./server/routers/moodDiary');
const friend = require('./server/routers/show-friend');
const happiness = require('./server/routers/show-happiness');
const addHappiness = require('./server/routers/add-happiness');
const traveller = require('./server/routers/traveller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use('/', friend);
app.use('/', happiness);
app.use('/', addHappiness);
app.use('/', moodDiaries);
app.use('/', traveller);

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

var server = app.listen(5000, function () {
  console.log('listening at port %s', server.address().port);
});

module.exports = server;