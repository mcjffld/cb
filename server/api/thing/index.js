'use strict';

var express = require('express');

var controller = require('./thing.controller');

var router = express.Router();

if (router) {
  router.get('/', controller.index);
  router.get('/up', controller.up);
  router.get('/down', controller.down);
} else {
  console.log ('no router ... ');
}
module.exports = router;