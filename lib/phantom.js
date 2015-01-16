/*!
* Phantom Manager
*/

var path = require('path'),
    cp = require('child_process');

/**
 * Phantom Constructor
 *
 * @param {Object} options
 * @api public
 */

function Phantom(options) {
  this.options = options;
}

/**
 * Run Phantom
 *
 * @param {Object} options
 * @api public
 */

Phantom.prototype.run = function(callback) {
  var phantomBinPath = path.resolve(__dirname, '../node_modules/.bin/phantomjs'),
      phantomProcess = cp.spawn(phantomBinPath, ['--webdriver', '4444']);

  phantomProcess.stdout.on('data', function(data) {
    if (data.toString().match(/GhostDriver - Main - running on port/)) {
      callback();
    }
    if (data.toString().match(/Error/)) {
      process.stdout.write(data);
      callback();
    }
  });

  phantomProcess.stderr.pipe(process.stdout);

  process.on('exit', function() {
    phantomProcess.kill();
  });
};

module.exports = Phantom;
