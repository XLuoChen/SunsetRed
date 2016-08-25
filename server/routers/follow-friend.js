const followFriend = require('../dbs/follow-friend');

const express = require('express');
const router = express.Router();

router.post('/follow', (req, res)=> {
  followFriend((result) => {
    res.json(result);
  });
});

module.exports = router;
