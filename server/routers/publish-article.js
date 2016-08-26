const express = require('express');
const router = express.Router();

router.post('/publication', (req, res)=> {
  res.send(
    [{
      title: req.body.title,
      content: req.body.content,
      author: "高乐",
      date: new Date().toLocaleDateString(),
      likedCount: 0,
      commentCount: 0
    }]);
});

module.exports = router;