const express = require('express');
const router = express.Router();
const insertData = require('../dbs/puclish-travel-article');

router.post('/traveller', (req, res) => {
  insertData(req.body, (articles) => {
    res.json(articles);
  })
});

module.exports = router;