'use strict';

var api = require('littlebits-cloud-http')
          .defaults({ 'access_token': '836d5b0323d8c7a0ded4dcff61c5dbd613d106fe0f01adbed581602ee3b17092' });


api.defaults();


var go = function(timeout, percentage) {
  setTimeout(function() {
    api.output('243c200bf972', { 'percent': percentage, 'duration_ms': -1 });
  }, timeout);

go(10,10);

