const Brick = require('./Brick');

class BrickArray {
  constructor () {
    this.brickField = [];
  }

  populateArray () {
    // let x = 20;
    // let y = 20;
    //
    // for (var i = 0; i < 24; i++) {
    //   x = 25 + ((i % 8) * 100) * 1.25;
    //   y = 6 + ((i % 3) * 25) * 2;
    //   this.brickField.push(new Brick(x, y));

    let x = 20;
    let y = 20;

    for (var i = 0; i < 24; i++) {
      x = 25 + ((i % 8) * 100) * 1.25;
      y = 400 + ((i % 3) * 25) * 2;
      this.brickField.push(new Brick(x, y));
    }

  }

  drawBricks(context) {
    for (var i = 0; i < this.brickField.length; i++) {
      this.brickField[i].draw(context);
    }
  }

  breakBricks(array, ball) {
    for (var i = 0; i < array.length; i++) {
      if (ball.y - 5 === array[i].y + 25 && ball.x - 5 > array[i].x && ball.x - 5 < array[i].x + 75) {
        ball.moveY = -ball.moveY;
        console.log(array[i]);
        console.log('glided!');

        array.splice(i, 1)

        // console.log("array id:", i, "array length", array.length)
      }
      else if (ball.y + 5 > array[i].y && ball.y - 5 < array[i].y && ball.x - 5 > array[i].x && ball.x - 5 < array[i].x + 75) {
        ball.moveY = -ball.moveY;
        array.splice(i, 1)
      }
    }
  }


}



module.exports = BrickArray;
