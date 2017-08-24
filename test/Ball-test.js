let chai = require('chai');
let assert = chai.assert;

const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js')
let ball;

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

  it('Ball should have a draw method', function() {
    const ball = new Ball ();

    assert.equal(typeof ball.draw, 'function');
  })

  it('Ball should have a bounce off walls method', function() {
    const ball = new Ball ();

    assert.equal(typeof ball.bounceWalls, 'function');
  })

  it('Ball should change directions when it hits a wall', function() {
    const ball = new Ball (495, 495, 3, 3);
    let canvas = { width: 900};

    assert.equal(ball.x, 495)
    assert.equal(ball.y, 495)
    assert.equal(ball.moveX, 3)

    ball.x = 901
    ball.bounceWalls(canvas);
    assert.equal(ball.moveX, -3)

  })

  it('Ball should have a bounce off paddle method', function() {
    const ball = new Ball (11, 11);
    const paddle = new Paddle(10, 10, 50);

    ball.bouncePaddle(paddle)
    assert.equal(ball.x, 11)
    assert.equal(ball.y, 11)
    assert.equal(paddle.x, 10)
    assert.equal(paddle.y, 10)
  })

  it('Ball should have the ability to reset', function () {
    const ball = new Ball ();

    assert.equal(typeof ball.resetBall, 'function');

  })
})
