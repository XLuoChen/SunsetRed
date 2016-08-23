const findData = require('../dbs/show-friend');

const express = require('express');

const router = express.Router();

router.get('/friend', (req, res)=> {
  findData((result) => {
    res.json(result);
  });
});

module.exports = router;
