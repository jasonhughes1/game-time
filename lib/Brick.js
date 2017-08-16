class Brick{
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.width = 75;
    this.height = 20;
    this.ctx = context;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }

  // move() {
  //   this.y--;
  // }
}

module.exports = Brick;
