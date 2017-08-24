const GamePiece = require ('./GamePiece.js');

class Brick extends GamePiece {
  constructor(x, y) {
    super (x, y)
    this.width = 100;
    this.height = 20;
    this.left = this.x;
    this.right = this.x + this.width;
    this.top = this.y;
    this.bottom =  this.y + this.height;
  }

  draw(context) {
    context.fillStyle = '#1EC242';
    context.fillRect(this.x, this.y, this.width, this.height);
  }

}
module.exports = Brick;
