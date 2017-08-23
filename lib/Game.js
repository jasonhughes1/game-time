const Paddle = require('./Paddle.js');
const Ball = require('./Ball.js');
const BrickArray = require('./BrickArray.js');



class Game {
  constructor(context, canvas) {
    this.livesLeft = 3;
    this.currentLevel = 1;
    this.paddle = new Paddle(400, 575);
    this.ball = new Ball(450, 565);
    this.brickArray = new BrickArray;
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
  }

  clearLevel () {
    if (this.brickArray.brickField.length === 0 && this.gameStarted === 1) {

      this.gameStarted = 0;
      this.levelUp();
    }
  }

  levelUp () {
    this.level++;
    this.ball.resetBall();
    this.brickArray.populateArray();
    document.getElementById('level-number').innerHTML = `Level: ${this.level}`;
    //new ball, new paddle, rebuild brick array
  }

  lostLife(ball) {
    if (ball.y > 601) {
      this.livesLeft--;
      this.ball.resetBall();
      this.gameOver();
      document.getElementById('lives-number').innerHTML = `Lives: ${this.livesLeft}`;
    }
  }

  gameOver() {
    if (this.livesLeft === 0) {
      alert("Game Over!");
      location.reload();
    }
  }
}

module.exports = Game;
