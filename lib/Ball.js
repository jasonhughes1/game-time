class Ball {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height - 50;
    this.width = 10;
    this.height = 10;
    this.moveX = 1;
    this.moveY = -1;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, 10, 0, Math.PI * 2);
    context.fillSyle = 'red';
    context.fill();
    context.closePath();
    this.x += this.moveX;
    this.y += this.moveY;
  }

  bouceWalls() {
    if (this.x + 5 === canvas.width) {
      this.moveX = -this.moveX;
    } else if (this.x - 5 === 0) {
      this.moveX = -this.moveX;
    } else if (this.y - 5 === 0) {
      this.moveY = -this.moveY;
    }
  }

  bouncePaddle(paddle) {
    let paddleRight = paddle.x + 50;
    let paddleLeft = paddle.x;
    if(this.y === paddle.y - 6 && this.x > paddleLeft && this.x < paddleRight) {
      this.moveY =-this.moveY;
    }
  }

}

module.exports = Ball;
