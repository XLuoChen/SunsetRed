const findData = require('../dbs/diaryContent');
const express = require('express');
const router = express.Router();

router.post('/diary', (req, res)=> {
  findData(req.body,(result) => {
    res.json(result);
  });
});

module.exports = router;