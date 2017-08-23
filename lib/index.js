const Paddle = require('./Paddle.js');
const Game = require('./Game.js');
const Ball = require('./Ball.js');
const BrickArray = require('./BrickArray.js');

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let brickArray = new BrickArray();

brickArray.populateArray();
let paddle = new Paddle(400, 575);
let ball = new Ball(450, 565);

let game = new Game();
// let level = document.getElementById('level-number');
// let lives = document.getElementById('lives-number');
let startButton = document.getElementById('start-button');


startButton.addEventListener('click', function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddle.draw(context);
  ball.draw(context);
  ball.bounceWalls(canvas);
  ball.bouncePaddle(paddle);
  brickArray.breakBricks(brickArray.brickField, ball);
  brickArray.drawBricks(context);
  game.lostLife(ball);
  game.lostLife(paddle);
  requestAnimationFrame(gameLoop);
  startButton.disabled = true;
  startButton.style.backgroundColor = 'grey';
});

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  paddle.draw(context);
  ball.draw(context);
  ball.bounceWalls(canvas);
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


// startButton.addEventListener('click', function() {
//   game.startGame(gameLoop);
//   startButton.disabled = true;
//   startButton.style.backgroundColor = 'grey';
// });
