
class Ball {
  constructor(x, y ) {
    this.x = x;
    this.y = y;
    // this.width = 10;
    // this.height = 10;
    this.radius = 10;
    this.moveX = 3;
    this.moveY = -3;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, 10, 0, Math.PI * 2);
    context.fill();
    context.fillSyle = 'red';
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

    if (this.y > paddle.y - 6 && this.x > paddleLeft && this.x < paddleRight) {
      this.moveY = -this.moveY;
    }
  }
}

module.exports = Ball
