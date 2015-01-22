var chai = require('chai');
var Cuked = require('../lib/cuked.js');
chai.should();

describe("cuked", function() {
  describe("options", function() {
    it("should store path option", function() {
      var cuked = new Cuked({ path: './foo/bar'});
      cuked.options.path.should.equal('./foo/bar');
    });
  });
});
