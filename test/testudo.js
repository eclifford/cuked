var chai = require('chai');
var Cuked = require('../lib/cuked.js');
chai.should();

describe("cuked", function() {
  it("should work", function() {
    var cuked = new Cuked();
    (true).should.equal(true);
  });
});
