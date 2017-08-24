var chai = require('chai');
var assert = chai.assert;



const BrickArray = require('../lib/BrickArray.js');
const Ball = require('../lib/Ball.js');

describe('brickArray test', function() {
  it('should be a function', function() {
    const brickArray = new BrickArray();
  });

  it('BrickArray should start out with an empty array', function() {
    const brickArray = new BrickArray();

    assert.equal(brickArray.brickField.length, 0)
  })

  it('BrickArray should have a populate method', function() {
    const brickArray = new BrickArray();

    assert.equal(typeof brickArray.populateArray, 'function');
  })

  it('BrickArray should be greater than zero after being populated', function() {
    const brickArray = new BrickArray();

    brickArray.populateArray()
    assert.equal(brickArray.brickField.length = 0, false);
  })

  it('Ball should break bricks when they collide', function() {
    const brickArray = new BrickArray(10, 10);
    const ball = new Ball (11, 11);


    brickArray.breakBricks(ball)
    assert.equal(ball.x, 11)
    assert.equal(ball.y, 11)
    assert.equal(brickArray.r, 10)
    assert.equal(brickArray.c, 10)
  })
})
