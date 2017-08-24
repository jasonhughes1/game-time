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

  it('Ball should have a draw method', function() {
    const ball = new Ball ();

    assert.equal(typeof ball.draw, 'function');
  })

  it('Ball should have a bounce off walls method', function() {
    const ball = new Ball ();

    assert.equal(typeof ball.bounceWalls, 'function');
  })

  it('Ball should have a bounce off paddle method', function() {
    const ball = new Ball ();

    assert.equal(typeof ball.bouncePaddle, 'function');

  })

  it('Ball should have the ability to reset', function () {
    const ball = new Ball ();

    assert.equal(typeof ball.resetBall, 'function');

  })
})
