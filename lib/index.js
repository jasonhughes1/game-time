
const Paddle = require('./Paddle');
const Game = require('./Game');
const Ball = require('./Ball');
const BrickArray = require('./BrickArray');

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// var brick = new Brick();
let brickArray = new BrickArray();

brickArray.populateArray();
console.log(brickArray.brickField);
var paddle = new Paddle(400, 575);
var ball = new Ball(500, 570);
// var gamePieces = [brick, paddle, ball];

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddle.draw(context);
  ball.draw(context);
  ball.bounceWalls(canvas);
  ball.bouncePaddle(paddle);
  brickArray.breakBricks(brickArray.brickField, ball);
  brickArray.drawBricks(context);
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

var game = new Game();
var startButton = document.getElementById('start-button');

startButton.addEventListener('click', function() {
  game.startGame(gameLoop);
  startButton.disabled = true;
  startButton.style.backgroundColor = 'grey';
});
