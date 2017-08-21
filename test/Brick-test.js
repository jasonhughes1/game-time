var chai = require('chai');
var assert = chai.assert;

var Brick = require('../lib/Brick.js');

describe('brick test', function() {
  it('should be a function', function() {
    const brick = new Brick();

  })

  it('Brick should have a default width of 75 and height of 25', function() {
    const brick = new Brick ();

    assert.equal(brick.width, 75);
    assert.equal(brick.height, 25);

  })



});
