var chai = require('chai');
var assert = chai.assert;

var BrickArray = require('../lib/BrickArray.js');


describe('brickArray test', function() {
  it('should be a function', function() {
    const brickArray = new BrickArray();
  });

  it('BrickArray should start out with an empty array', function() {
    const BrickArray = new BrickArray ();

    assert.equal(brickArray.brickField === [])
  })

  it('BrickArray should popluate', function() {
    const BrickArray = new BrickArray ();

    assert.equal(typeof brickArray.populateArray, 'function');
  })


})
