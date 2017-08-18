var chai = require('chai');
var assert = chai.assert;

var Ball = require('../lib/Ball.js');


describe('Ball', function() {
  // let Ball;


  it('Ball should have a default width of 10 and height of 10', function() {
    const ball = new Ball ();

    assert.equal(ball.width, 10);
    assert.equal(ball.height, 10);

  })

  it('Ball should move on canvas', function() {
    const ball = new Ball ();

    assert.equal(ball.moveX !== 0, true);
    assert.equal(ball.moveY !== 0, true);

  })

})
