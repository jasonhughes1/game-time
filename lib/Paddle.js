class Paddle {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 12;
  }

  draw(context) {
    context.fillStyle = "#E400D0";
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  moveRight() {
    if (this.x + 50 < 849) {
      this.x += 50;
    }
  }

  moveLeft() {
    if (this.x > 1) {
      this.x -= 50;
    }
  }
}


module.exports = Paddle;
