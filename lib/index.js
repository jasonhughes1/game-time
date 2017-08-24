const Game = require('./Game.js');

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.font = "100px Verdana";
context.fillStyle = 'white';
context.fillText("BREAKOUT", 160, 150);

context.font = "24px Verdana";
context.fillText("A Game where you must destroy every brick.", 162, 225)
context.fillText("Use the arrow keys to move the paddle left and right.", 120, 300)
context.fillText("There are 3 levels, and you have 3 lives.", 190, 375)
context.fillText("Hit the Start Button to begin", 275, 450)
context.fillText("Good Luck!!!", 360, 525)

let game = new Game(context, canvas);
let startButton = document.getElementById('start-button');

startButton.addEventListener('click', function (e) {
  e.preventDefault();
  game.buildGame();
  if (game.gameStarted === 0) {
    game.gameStarted = 1;
    gameLoop();
  }
  if (game.level > 0) {
    game.ball.moveX = game.level * -2.5;
    game.ball.moveY = game.level * -2.5;
  }
  if (game.level > 1) {
    game.paddle.width = game.paddle.width * .85;
  }
  startButton.disabled = true;
  startButton.style.backgroundColor = 'grey';

  if (game.level > 3) {
    context.font = "100px Verdana";
    context.fillStyle = 'orange';
    context.fillText("You Win!", 160, 150);
  }

  if (game.livesLeft === 0) {
    context.font = "100px Verdana";
    context.fillStyle = 'orange';
    context.fillText("GAME OVER", 160, 150);
  }
});

function gameLoop() {
  if (game.gameStarted === 1) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.runGame();
    requestAnimationFrame(gameLoop);
  } else {
    cancelAnimationFrame(gameLoop);
  }
}

gameLoop();

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 39) {
    game.paddle.moveRight();
  } else if (e.keyCode === 37) {
    game.paddle.moveLeft();
  }

});
