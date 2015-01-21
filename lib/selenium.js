/*!
* Selenium Manager
*/

var selenium_launcher = require('selenium-launcher');

/**
* Selenium Constructor
*
* @param {Object} options
* @api public
*/

function Selenium(options) {
  this.options = options;
}

/**
* Run Selenium process
*
* @param {Function} callback
* @api public
*/

Selenium.prototype.run = function(callback) {
  selenium_launcher(function(err, selenium) {
    if (err) {
      return callback(err);
    }

    // store created host and port
    process.env['cuked.host'] = selenium.host;
    process.env['cuked.port'] = selenium.port;

    callback();
  });

};

module.exports = Selenium;
