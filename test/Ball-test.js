let chai = require('chai');
let assert = chai.assert;

let Ball = require('../lib/Ball.js');


describe('ball test', function() {
  it('should be a function', function() {
    const ball = new Ball();

  });

  it('Ball should have a default radius of 10', function() {
    const ball = new Ball ();

    assert.equal(ball.radius, 10);

  });

  it('Ball should start at 0, 0', function() {
    const ball = new Ball ();

    assert.equal(ball.moveX === 0, true);
    assert.equal(ball.moveY === 0, true);

  })

  it('Ball should be drawn', function() {
    const ball = new Ball(450, 565);

    assert.equal()
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
