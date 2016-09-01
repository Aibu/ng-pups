var Puppy = require('./db').Puppy;
var express = require('express');
var router = express.Router();
module.exports = router;

router.get('/puppies', function (req, res, next) {
  Puppy.findAll({})
      .then(function (puppies) {
        res.send(puppies);
      })
      .catch(next);
});

router.get('/puppies/:id', function (req, res, next) {
  Puppy.findById(req.params.id)
      .then(function (onePup) {
        res.send(onePup);
      })
      .catch(next);
});