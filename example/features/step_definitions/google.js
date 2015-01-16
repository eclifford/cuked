module.exports = function () {
  // this.World = require('../../lib/cucumberjs/world.js').World;

  this.Given("I am on Google", function(callback) {
    this.browser
      .get('http://google.com')
      .nodeify(callback);
  });

  this.When('I search for "$query"', function(query, callback) {
    this.browser
      .elementByName('q')
      .type(query + '\n')
      .nodeify(callback)
  });

  this.Then('I see a link to "$url"', function(url, callback) {
    this.browser
      .waitForElementByCss('a[href*="' + url + '"]')
      .nodeify(callback)
  });

};
