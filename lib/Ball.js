
class Ball {
  constructor(x, y, moveX, moveY) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.moveX = 0;
    this.moveY = 0;
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
      console.log("i reversed moveY");
    }
  }

  bouncePaddle(paddle) {
    let paddleRight = paddle.x + 100;
    let paddleLeft = paddle.x;

    if (this.y > paddle.y - 12 && this.x > paddleLeft && this.x < paddleRight) {
      this.moveY = -this.moveY;
      console.log("not again!");
    }
  }

  resetBall(game) {
    let startButton = document.getElementById('start-button');
    
    this.moveX = 0;
    this.moveY = 0;
    this.x = 450;
    this.y = 565;
    startButton.disabled = false;
    startButton.style.backgroundColor = '#1EC242';
    // paddle.x = 400;
    // paddle.y = 575;
    // gameLoop();
  }
}

module.exports = Ball;
