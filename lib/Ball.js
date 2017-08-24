const GamePiece = require ('./GamePiece.js');

class Ball extends GamePiece {
  constructor(x, y, moveX = 0, moveY = 0) {
    super (x, y)
    this.radius = 10;
    this.moveX = moveX;
    this.moveY = moveY;
  }

  draw(context) {
    context.fillStyle = "#00F6FB";
    context.beginPath();
    context.arc(this.x, this.y, 10, 0, Math.PI * 2);
    context.fill();
    context.closePath();
    this.x += this.moveX;
    this.y += this.moveY;
  }

  bounceWalls(canvas) {
    if (this.x + 5 > canvas.width) {
      this.moveX = -this.moveX;
    } else if (this.x - 5 < 0) {
      this.moveX = -this.moveX;
    } else if (this.y - 5 < 0) {
      this.moveY = -this.moveY;
    }
  }

  bouncePaddle(paddle) {
    let paddleRight = paddle.x + 100;
    let paddleLeft = paddle.x;

    if (this.y > paddle.y - 12 && this.x > paddleLeft && this.x < paddleRight) {
      this.moveY = -this.moveY;
    }
  }

  resetBall() {
    let startButton = document.getElementById('start-button');

    this.moveX = 0;
    this.moveY = 0;
    this.x = 450;
    this.y = 565;
    startButton.disabled = false;
    startButton.style.backgroundColor = '#1EC242';
  }
}

module.exports = Ball;
