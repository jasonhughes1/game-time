class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 10;
  }

  draw(context) {
    context.fillSytle = 'blue';
    context.fillRect(this.x, this.y, this.width, this.height);
  }

}
module.exports = Brick
