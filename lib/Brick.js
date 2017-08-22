class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 20;
  }

  draw(context) {
    context.fillStyle = '#1EC242';
    context.fillRect(this.x, this.y, this.width, this.height);
  }

}
module.exports = Brick
