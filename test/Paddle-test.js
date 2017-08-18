var chai = require('chai');
var assert = chai.assert;

var Paddle = require('../lib/Paddle.js');


describe('Paddle', function() {
  // let Paddle;

  it('Paddle should have a default width of 100 and height of 15', function() {
    const paddle = new Paddle ();

    assert.equal(paddle.width, 100);
    assert.equal(paddle.height, 15);

  })

  it('Paddle should move right', function() {
    const paddle = new Paddle (x = 800, y = 14);

    paddle.moveRight();
    assert.equal(paddle.x === 850, true);

  })

  it('Paddle should move left', function() {
    const paddle = new Paddle (x = 200, y = 14);

    paddle.moveLeft();
    assert.equal(paddle.x === 150, true);

  })

});
