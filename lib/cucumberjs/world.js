/*!
 * Cuked World
 */

var wd = require('webdriverio'),
    fs = require('fs'),
    chai = require('chai'),
    path = require('path'),
    chaiAsPromised = require('chai-as-promised');

// setup assertions
chai.use(chaiAsPromised);
chai.should();

module.exports = function() {
  global.client = wd.remote({
    desiredCapabilities: {
      browserName: process.env['cuked.browser'],
      platform: process.env['cuked.platform'],
      name: process.env['cuked.name']
    },
    user: process.env['cuked.user'] || process.env.SAUCE_USERNAME,
    key: process.env['cuked.key'] || process.env.SAUCE_ACCESS_KEY,
    host: process.env['cuked.host'],
    port: process.env['cuked.port'],
    logLevel: process.env['cuked.log']
  });

  // setup promises
  chaiAsPromised.transferPromiseness = global.client.transferPromiseness;

  // load cuked webdriver configuration
  var configPath = path.resolve(process.cwd(), process.env['cuked.path'], 'cuked.js');
  if (fs.existsSync(configPath)) {
    global.client = require(configPath)(client);
  }

  // init driver
  global.client.init();

  this.World = function World(callback) {
    this.client = global.client;

    callback();

    return this;
  };
};
