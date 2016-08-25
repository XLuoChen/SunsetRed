const findData = require('../dbs/moodDiary');
const express = require('express');
const router = express.Router();

router.post('/diaryContent', (req, res)=> {
  findData({userId:req.body.userId},(result) => {
    res.json(result);
  });
});

module.exports = router;