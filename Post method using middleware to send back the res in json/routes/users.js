var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  console.log("what is req", req);
  console.log("password is", req.body.pwd);
  res.json(req.body);
  // res.json(req.body);
});
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
