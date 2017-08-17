class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 75;
    this.height = 25;
  }

  draw(context) {
    context.fillSytle = 'blue';
    context.fillRect(this.x, this.y, this.width, this.height);
  }

}
module.exports = Brick
