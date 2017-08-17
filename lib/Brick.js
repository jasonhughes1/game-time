class Brick{
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 75;
    this.height = 20;
  }

  draw(context) {
    context.fillSytle = 'blue';
    context.fillRect(this.x, this.y, this.width, this.height);
  }

buildArray() {
  let blockArray = [];
  for(var i = 0; i < 24; i++) {
    this.x = 6.25 + ((i % 8) * 50) * 1.25;
    this.y = 6 + ((i % 3)) * 10) * 2;
    blockArray.push(newBlocks(this.x, this.y));
  }
  return blockArray;
}

  buildBlocks(array, context) {
    for (var i = 0; i < array.length; i++) {
      array[i].draw(context);
    }
  }



module.exports = Brick;
