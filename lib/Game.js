const Paddle = require('./Paddle.js');
const Ball = require('./Ball.js');
const BrickArray = require('./BrickArray.js');

class Game {
  constructor(context, canvas) {
    this.livesLeft = 3;
    this.paddle = new Paddle(400, 575);
    this.ball = new Ball(450, 565);
    this.brickArray = new BrickArray(3, 8);
    this.context = context;
    this.canvas = canvas;
    this.gameStarted = 0;
    this.level = 1;
  }

  buildGame () {
    if (this.gameStarted === 0) {
      this.brickArray.populateArray();
    }
  }

  runGame () {
    this.paddle.draw(this.context);
    this.ball.draw(this.context);
    this.brickArray.drawBricks(this.context);

    this.ball.bounceWalls(this.canvas);
    this.ball.bouncePaddle(this.paddle);
    this.brickArray.breakBricks(this.brickArray.brickField, this.ball);

    this.lostLife(this.ball);
    this.clearLevel();
    this.gameOver();
  }

  clearLevel () {
    if (this.brickArray.brickField.length === 0 && this.gameStarted === 1) {
      this.gameStarted = 0;
      this.levelUp();
    }
  }

  levelUp () {
    let startButton = document.getElementById('start-button');

    this.level++;
    this.context.font = "20px Verdana";
    this.context.fillStyle = 'orange';
    this.context.fillText("CONGRATS! You just leveled up! Click start game to begin", 160, 150);
    this.ball.resetBall();
    startButton.disabled = false;
    startButton.style.backgroundColor = '#1EC242';
    this.brickArray = new BrickArray (3, 3);
    this.ball = new Ball (450, 565, -2, -2);
    document.getElementById('level-number').innerHTML = `Level: ${this.level}`;
  }

  lostLife(ball) {
    if (ball.y > 601) {
      this.livesLeft--;


      this.ball.resetBall();

      document.getElementById('lives-number').innerHTML = `Lives: ${this.livesLeft}`;
      this.ball.resetBall();


      if (this.lives < 1) {
        this.gameOver();
      }
    }
  }

  gameOverMessage() {
    if (this.livesLeft === 0) {
      this.gameOver();
      alert("Game Over");
      location.reload();
    }
  }


  gameOver() {
    if (this.livesLeft === 0) {
      let startButton = document.getElementById('start-button');

      this.context.font = "100px Verdana";
      this.context.fillStyle = 'orange';
      this.context.fillText("GAME OVER!", 160, 150);
      startButton.disabled = true;
      startButton.style.backgroundColor = 'grey';
    }
  }

  resetGame() {
    this.livesLeft = 3;
    this.level = 1;
    this.ball.resetBall();
  }
}



module.exports = Game;
