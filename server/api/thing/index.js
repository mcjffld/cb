'use strict';

var express = require('express');

console.log (express);

var controller = require('./thing.controller');

var router = express();

router.get('/', controller.index);
router.get('/up', controller.up);
router.get('/down', controller.down);

module.exports = router;