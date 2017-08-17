const Brick = require('./Brick');
const Paddle = require('./Paddle');
const Game = require('./Game');
const Ball = require('./Ball');

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var brick = new Brick();
var paddle = new Paddle(200, 450)
var ball = new Ball();
var gamePieces = [brick, paddle, ball];
var buildAnArray = brick.buildArray();

function gameLoop() {
  context.clearRect(0,0, canvas.width, canvas.height);
  paddle.draw(context);
  ball.draw(context);
  ball.bounceWalls();
  ball.bouncePaddle(paddle);
  brick.buildBricks(buildAnArray, context);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 39) {
    paddle.moveRight();
  } else if (e.keyCode === 37) {
    paddle.moveLeft();
  }
});
