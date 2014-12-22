/**
 * Main application routes
 */

'use strict';

var express = require('express');

var controller = require('./api/thing/thing.controller');

var router = express.Router();

module.exports = function(app) {


  if (router) {
    router.get('/api/things/', controller.index);
    router.get('/api/things/up', controller.up);
    router.get('/api/things/down', controller.down);
  } else {
    console.log ('no router ... ');
  }

  // All other routes should redirect to the index.html
  app.get('*',function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
