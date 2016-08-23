// const findData = require('../dbs/find-from-db');

const express = require('express');

const router = express.Router();

router.get('/moodDiaries', (req, res)=> {
  // findData((result) => {
    result = [{name:'baiying',title:'我的心情',content:'我很好',sort:'情感天地'}];
    res.json(result);
  // });
});

module.exports = router;