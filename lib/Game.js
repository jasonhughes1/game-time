const Ball = require('./Ball.js');
const BrickArray = require('./BrickArray.js');
const Paddle = require('./Paddle.js');
// const Brick = require('./Brick.js')

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
let brickArray = new BrickArray();



brickArray.populateArray();
// console.log(brickArray.brickField);
var paddle = new Paddle(400, 575);
var ball = new Ball(450, 565);
// var gamePieces = [brick, paddle, ball];
// var game = new Game();
var startButton = document.getElementById('start-button');

class Game {
  constructor() {
    this.livesLeft = 2;
    this.currentLevel = 1;
  }
}




startButton.addEventListener('click', function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddle.draw(context);
  ball.draw(context);
  ball.bounceWalls(canvas);
  ball.bouncePaddle(paddle);
  brickArray.breakBricks(brickArray.brickField, ball);
  brickArray.drawBricks(context);
  requestAnimationFrame(gameLoop);
  startButton.disabled = true;
  startButton.style.backgroundColor = 'grey';
});

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddle.draw(context);
  ball.draw(context);
  ball.bounceWalls(canvas);
  ball.bouncePaddle(paddle);
  brickArray.breakBricks(brickArray.brickField, ball);
  brickArray.drawBricks(context);
  // requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 39) {
    paddle.moveRight();
  } else if (e.keyCode === 37) {
    paddle.moveLeft();
  }
});





module.exports = Game
