const Paddle = require('./Paddle.js');
const Game = require('./Game.js');
const Ball = require('./Ball.js');
const BrickArray = require('./BrickArray.js');

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");


context.font = "100px Verdana";
context.fillStyle = 'orange';
context.fillText("BREAKOUT", 160, 150);

context.font = "24px Verdana";
context.fillText("A Game where you must destroy every brick", 160, 300)
context.fillText("Use the arrow keys to move the paddle left and right", 160, 375)
context.fillText("There are 3 levels, and you have 3 lives", 160, 450)
context.fillText("Hit the Start Button to begin", 160, 525)
context.fillText("Good Luck!!!", 160, 600)

let paddle = new Paddle(400, 575);
let ball = new Ball(450, 565);

let game = new Game(context, canvas);
let level = document.getElementById('level-number');
let lives = document.getElementById('lives-number');
let startButton = document.getElementById('start-button');


startButton.addEventListener('click', function (e) {
  e.preventDefault();
  game.buildGame();
  if (game.gameStarted === 0) {
    game.gameStarted = 1;
    gameLoop();
  }
  if (game.level > 0) {
    game.ball.moveX = game.level * -2;
    game.ball.moveY = game.level * -2;
  }
  if (game.level > 1) {
    game.paddle.width = game.paddle.width * .85;
  }
  startButton.disabled = true;
  startButton.style.backgroundColor = 'grey';
});


function gameLoop() {
  // console.log(game.gameStarted);
  if (game.gameStarted === 1) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.runGame();
    requestAnimationFrame(gameLoop);
  }
  else {
    cancelAnimationFrame(gameLoop);
  }
}

gameLoop();

// requestAnimationFrame(gameLoop);

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 39) {
    game.paddle.moveRight();
  } else if (e.keyCode === 37) {
    game.paddle.moveLeft();
  }


});
