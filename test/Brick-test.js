var chai = require('chai');
var assert = chai.assert;

var Brick = require('../lib/Brick.js');

describe('brick test', function() {
  it('should be a function', function() {
    const brick = new Brick();

  })

  it('Brick should have a default width of 100 and height of 20', function() {
    const brick = new Brick ();

    assert.equal(brick.width, 100);
    assert.equal(brick.height, 20);

  })

  it('Brick should have a draw method', function() {
    const brick = new Brick ();

    assert.equal(typeof brick.draw, 'function');
  })
});
