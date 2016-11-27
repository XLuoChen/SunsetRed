const followFriend = require('../dbs/follow-friend');
const cancelFollowFriend = require('../dbs/cancel-follow-friend');

const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.post('/follow', (req, res)=> {
  followFriend(req.body.id, (result) => {
    res.json(result);
  });
});

router.post('/cancelFollow', (req, res)=> {
  cancelFollowFriend(req.body.id, (result) => {
    res.json(result);
  });
});

module.exports = router;
