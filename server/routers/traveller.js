const express = require('express');
const findData = require('../dbs/find-articles');

const router = express.Router();

router.get('/traveller', (req, res) => {
  findData((result) => {
    res.send(result);
  });
});

module.exports = router;