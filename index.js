var config = require('cconfig');
var Plugin = require('microsvc').Plugin;
var util = require('util');

function CconfigPlugin (path) {
  this.path = path;
  Plugin.call(this);
}

util.inherits(CconfigPlugin, Plugin);

CconfigPlugin.prototype._start = function _start (service) {
  service.config = config(this.path);
  this.done();
};

module.exports = function (path) {
  return new CconfigPlugin(path);
};