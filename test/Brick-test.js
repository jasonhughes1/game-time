var chai = require('chai');
var assert = chai.assert;

var Brick = require('../lib/Brick.js');

describe('Brick', function() {
  context('', function() {
    // Your tests here...
  });

  it('Brick should have a default width of 75 and height of 25', function() {
    const brick = new Brick ();

    assert.equal(brick.width, 75);
    assert.equal(brick.height, 25);

  })

});
