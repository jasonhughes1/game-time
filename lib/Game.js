const Paddle = require('./Paddle.js');
const Ball = require('./Ball.js');
const BrickArray = require('./BrickArray.js');



class Game {
  constructor(context, canvas) {
    this.livesLeft = 3;
    this.paddle = new Paddle(400, 575);
    this.ball = new Ball(450, 565);
    this.brickArray = new BrickArray(2, 2);
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

  levelUp (context) {
    let startButton = document.getElementById('start-button');

    this.level++;
    // context.font = "100px Verdana";
    // context.fillStyle = 'orange';
    // context.fillText("CONGRATS! Ready for Level #${this.level}", 160, 150);
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
      this.gameOver();
      document.getElementById('lives-number').innerHTML = `Lives: ${this.livesLeft}`;
    }
  }

  gameOver(context) {
    if (this.livesLeft === 0) {
        alert("Game Over");
        location.reload();
    }
  }
}

module.exports = Game;
