/**
 * Main application routes
 */

'use strict';

var controller = require('./api/thing/thing.controller');

module.exports = function(app) {


  app.get('/api/up', controller.up);
  app.get('/api/down', controller.down);
  app.get('/api/status', controller.status);

  // All other routes should redirect to the index.html
  app.get('*',function(req, res) {
      res.sendfile('index.html');
    });
};
