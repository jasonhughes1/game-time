class Brick {
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

  buildArray () {
    let brickArray = [];

    for (var i = 0; i < 24; i++) {
      this.x = 6.25 + ((i % 8) * 50) * 1.25;
      this.y = 6 + ((i % 3) * 10) * 2;
      brickArray.push(new Brick(this.x, this.y));
    }
    return brickArray;
  }

  buildBricks(array, context) {
    for (var i = 0; i < array.length; i++) {
      array[i].draw(context);
    }
  }

  breakBlocks(array, ball) {
    for (var i = 0; i < array.length; i++) {
      if (ball.y - 4 === array[i].y + 10 && ball.x <= array[i].x) {
        ball.moveY = -ball.moveY;
        console.log("array id:", i, "array[i] coordinates: ", array[i].x, ",", array[i].y);
        console.log("array id:", i, "ball coordinates: ", ball.x, ",", ball.y);
        console.log("array id:", i, array[i])
        array.splice(i, 1)
        console.log("array id:", i, "array length", array.length)
      }
    }
  }
}
module.exports = Brick
