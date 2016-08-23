const express = require('express');
const bodyParser = require('body-parser');
const app = new express();

const hello = require('./server/routers/hello-world');
const moodDiaries = require('./server/routers/moodDiary');
const friend = require('./server/routers/show-friend');
const happiness = require('./server/routers/show-happiness');
const traveller = require('./server/routers/traveller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.use('/', hello);
app.use('/', friend);
app.use('/', happiness);
app.use('/', moodDiaries);
app.use('/', traveller);

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

var server = app.listen(3000, function () {
  console.log('listening at port %s', server.address().port);
});

module.exports = server;