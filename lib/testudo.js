/*!
 * testudo
 * http://github.com/eclifford/testudo
 *
 * Author: Eric Clifford
 * Email: ericgclifford@gmail.com
 * Date: 1.15.2015
 *
 * MIT Licensed
 */

/**
 * Externals
 */

var path = require('path'),
    async = require('async');

/**
 * Internals
 */

exports.Cucumber = require('./cucumber.js');
exports.Phantom = require('./phantom.js');
exports.Selenium = require('./selenium.js');

/**
 * Testudo Constructor
 *
 * Options:
 *    - `browser` browser to run tests in
 *
 * @param {Object} options
 * @api public
 */

function Testudo(options) {
  this.options = options;

  // store all cli parameters in env hash
  for (var option in options) {
    process.env["testudo." + option] = options[option];
  }
}

/**
 * Setup environment and run tests
 *
 * @param {Function} callback
 * @api public
 */

Testudo.prototype.run = function(callback) {
  var processes = [],
      cucumber = new exports.Cucumber(this.options);

  // phantom
  if (this.options.browser === 'phantomjs') {
    var phantom = new exports.Phantom(this.options);
    processes.push(phantom.run.bind(phantom));
  }

  // selenium
  else if (!this.options.remote.match(/saucelabs/)) {
    var selenium = new exports.Selenium(this.options);
    processes.push(selenium.run.bind(selenium));
  }

  // run cucumber
  processes.push(cucumber.run.bind(cucumber));
  processes.push(function(err, result) {
    callback(err, result);
  });

  // run processes
  async.series(processes);
};

module.exports = Testudo;
