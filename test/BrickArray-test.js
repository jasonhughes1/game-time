var chai = require('chai');
var assert = chai.assert;

var BrickArray = require('../lib/BrickArray.js');


describe('brickArray test', function() {
  it('should be a function', function() {
    const brickArray = new BrickArray();

  })

  it ('should start out with an empty array', function() {
    const BrickArray = new BrickArray ();

    assert.equal(BrickArray.brickField === [])

  });

})
