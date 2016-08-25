const addData = require('../dbs/add-happiness');
const express = require('express');
const router = express.Router();

router.post('/happinessPublish', (req, res)=> {
  addData(req,(result) => {
    res.json(result);
  });
});

module.exports = router;
