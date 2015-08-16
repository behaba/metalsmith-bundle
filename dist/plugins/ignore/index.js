'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _utils = require('../../utils');

var log = (0, _utils.debug)('metalsmith:ignore');

var DEFAULTS = {};

exports['default'] = function (options) {
  options = (0, _utils.extend)({}, DEFAULTS, options);

  var _options = options;
  var patterns = _options.patterns;

  return function (files, metalsmith, done) {
    (0, _utils.each)(files, function (data, file) {
      if (!(0, _utils.match)(file, patterns)) {
        return;
      }

      log('ignoring %s', file);
      delete files[file];
    });

    done();
  };
};

module.exports = exports['default'];