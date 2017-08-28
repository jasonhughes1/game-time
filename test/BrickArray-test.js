var chai = require('chai');
var assert = chai.assert;

const BrickArray = require('../lib/BrickArray.js');
const Ball = require('../lib/Ball.js');
const Game = require('../lib/Game.js');
const Paddle = require('../lib/Paddle.js');

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
    const game = new Game ();
    game.brickArray.populateArray();
    game.ball.x = 50;
    game.ball.y = 20;

    assert.equal(game.brickArray.brickField.length === 24, true)
    game.brickArray.breakBricks(game.brickArray.brickField, game.ball);
    assert.equal(game.brickArray.brickField.length === 23, true)
  })
})
