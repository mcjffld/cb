/**
 * Main application routes
 */

'use strict';

var controller = require('./api/thing/thing.controller');

module.exports = function(app) {


  app.get('/api/things/', controller.index);
  app.get('/api/things/up', controller.up);
  app.get('/api/things/down', controller.down);

  // All other routes should redirect to the index.html
  app.get('*',function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
