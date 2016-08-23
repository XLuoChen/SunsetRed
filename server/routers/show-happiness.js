const findData = require('../dbs/show-happiness');
const express = require('express');
const router = express.Router();

router.get('/happiness', (req, res)=> {
  let result = [{name: "Jake", image: "../../public/images/a.jpg", text: "晒幸福", likedCount: 20}, {
    name: "Lily",
    image: "../../public/images/b.jpg",
    text: "晒幸福",
    likedCount: 12
  }, {name: "John", image: "../../public/images/c.jpg", text: "晒幸福", likedCount: 37}];

  res.json(result);
});

module.exports = router;
