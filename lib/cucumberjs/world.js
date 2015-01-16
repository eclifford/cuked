/*!
 * Testuo World
 */

var wd = require('wd'),
    fs = require('fs'),
    chai = require('chai'),
    path = require('path'),
    chaiAsPromised = require('chai-as-promised'),j
    remote = {};

// setup remote
remote = wd.promiseChainRemote(process.env['cuked.remote']);

// load custom wd configuration if applicable
var configPath = path.resolve(process.cwd(), process.env['cuked.path'], 'cuked.js');
if (fs.existsSync(configPath)) {
  wd = require(configPath).wd(wd);
}

// setup assertions
chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

wd.configureHttp({
  timeout: 30000,
  retries: 3,
  retryDelay: 1000,
  baseUrl: 'http://localhost:8000'
});

if (process.env['cuked.debug'] === 'true') {
  // log status output from web driver
  remote.on('status', function(info){
    console.log('\x1b[36m%s\x1b[0m', info);
  });

  // // log commands from web driver
  remote.on('command', function(meth, path, data){
    console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path, data || '');
  });
}

module.exports = function() {
  this.World = function World(callback) {
    global.browser = this.browser = remote;

    // run the callback when we are done do cucumber knows we are ready
    this.browser.init({
      browserName: process.env['cuked.browser'],
      platform: process.env['cuked.platform'],
      name: process.env['cuked.name']
    }).nodeify(callback);

    return this;
  };
};
