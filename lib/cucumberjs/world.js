/*!
 * Cuked World
 */

var wd = require('webdriverio'),
    fs = require('fs'),
    chai = require('chai'),
    path = require('path'),
    chaiAsPromised = require('chai-as-promised');

// load custom wd configuration if applicable
var configPath = path.resolve(process.cwd(), process.env['cuked.path'], 'cuked.js');
if (fs.existsSync(configPath)) {
  wd = require(configPath).wd(wd);
}

// setup assertions
chai.use(chaiAsPromised);
chai.should();

module.exports = function() {
  this.World = function World(callback) {
    global.client = this.client = wd.remote({
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
    chaiAsPromised.transferPromiseness = client.transferPromiseness;
    this.client.init();

    callback();

    return this;
  };
};
