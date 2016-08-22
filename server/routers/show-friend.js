const findData = require('../dbs/show-friend');

const express = require('express');

const router = express.Router();

router.get('/friend', (req, res)=> {
    let result = [
      {name: "高乐", sex: "女", city: "西安"},
      {name: "黄丽珍", sex: "女", city: "西安"},
      {name: "赵路", sex: "女", city: "西安"},
      {name: "刘一林", sex: "女", city: "西安"}];
    res.json(result);
});

module.exports = router;
