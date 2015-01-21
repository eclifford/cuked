module.exports = function () {

  this.Given("I am on Google", function(callback) {
    this.client
      .url('http://google.com')
      .call(callback);
  });

  this.When('I search for "$query"', function(query, callback) {
    this.client
      .setValue('*[name="q"]', query)
      .call(callback);
  });

  this.Then('I see a link to "$url"', function(url, callback) {
    this.client
      .waitForExist('a[href*="' + url + '"]', 3000)
      .should.eventually.exist
      .call(callback);
  });

};
