var chai = require('chai');
var assert = chai.assert;

var Ball = require('../lib/Ball.js');


describe('ball test', function() {
  it('should be a function', function() {
    const ball = new Ball();

  })

  it('Ball should have a default radius of 10', function() {
    const ball = new Ball ();

    assert.equal(ball.radius, 10);

  })

  it('Ball should move on canvas', function() {
    const ball = new Ball ();

    assert.equal(ball.moveX !== 0, true);
    assert.equal(ball.moveY !== 0, true);

  })

  it('Ball should bounce off right and left wall', function() {
    const ball = new Ball(500);
    let ballMoveOnX = ball.moveX;

    ball.bounceWalls(1000);
    assert.equal(ball.moveX === -ballMoveOnX, false);
  })

  it('Ball should bounce off top and bottom of canvas', function() {
    const ball = new Ball(795);
    let ballMoveOnY = ball.moveY;

    ball.bounceWalls(800);
    assert.equal(ball.moveY === -ballMoveOnY, false);
  })

  it('Ball should bounce off the paddle', function() {
    const ball = new Ball(400);
    let ballHitsPaddle = ball.moveY;

    ball.bouncePaddle(14);
    assert.equal(ball.moveY === -ballHitsPaddle, false);
  })
})
