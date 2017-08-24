var chai = require('chai');
var assert = chai.assert;

var Paddle = require('../lib/Paddle.js');


describe('Paddle test', function() {
  it('should be a function', function() {
    const paddle = new Paddle();

  })

  it('Paddle should have a default width of 100 and height of 12', function() {
    const paddle = new Paddle ();

    assert.equal(paddle.width, 100);
    assert.equal(paddle.height, 12);

  })

  it('Paddle should have a draw method', function() {
    const paddle = new Paddle ();

    assert.equal(typeof paddle.draw, 'function');
  })

  it('Paddle should have a move right method', function() {
    const paddle = new Paddle ();

    assert.equal(typeof paddle.moveRight, 'function');
  })

  it('Paddle should have a move left method', function() {
    const paddle = new Paddle ();

    assert.equal(typeof paddle.moveLeft, 'function');
  })

  it('Paddle should move right', function() {
    const paddle = new Paddle (x = 400, y = 14);

    paddle.moveRight();
    assert.equal(paddle.x === 450, true);

  })

  it('Paddle should move left', function() {
    const paddle = new Paddle (x = 200, y = 14);

    paddle.moveLeft();
    assert.equal(paddle.x === 150, true);

  })

});
