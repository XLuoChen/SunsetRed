const findData = require('../dbs/moodDiary');
const express = require('express');
const router = express.Router();

router.get('/moodDiaries', (req, res)=> {
  findData((result) => {
    res.json(result);
  });
});

module.exports = router;