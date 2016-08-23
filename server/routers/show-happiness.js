const findData = require('../dbs/show-happiness');
const express = require('express');
const router = express.Router();

router.get('/happiness', (req, res)=> {
  findData((result) => {
    res.json(result);
  });
});

module.exports = router;
