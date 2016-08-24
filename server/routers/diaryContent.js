const findData = require('../dbs/moodDiary');
const express = require('express');
const router = express.Router();

router.post('/diaryContent', (req, res)=> {
  findData((result) => {
    res.json(result[req.body.index]);
  });
});

module.exports = router;