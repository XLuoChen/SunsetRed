const find = require('../dbs/show-friend');

const express = require('express');
const bodyParser = require('body-parser');

const app = new express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.get('/friends', (req, res)=> {
  find.findData((result) => {
    res.json(result);
  });
});

router.post('/friends', (req, res)=> {
  find.findFriend(req.body.condition.sex,(result) => {
    res.json(result);
  });

});

module.exports = router;
