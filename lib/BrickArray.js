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
    //   y = 400 + ((i % 3) * 25) * 2;
    //   this.brickField.push(new Brick(x, y));
    // }

    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 8; c++) {
        let y = r + (35 * r);
        let x = c + (129 * c);

        this.brickField.push(new Brick(x, y));
      }
    }

  }

  drawBricks(context) {
    for (var i = 0; i < this.brickField.length; i++) {
      this.brickField[i].draw(context);
    }
  }

  breakBricks(array, ball) {
    for (var i = 0; i < array.length; i++) {

      if (ball.y <= array[i].y && ball.x >= array[i].x && ball.x <= array[i].x) {
        ball.moveY = -ball.moveY;
        array.splice(i, 1)
      }

      else if  (ball.y - 12.5 <= array[i].y + 25 && ball.x - 5 >= array[i].x && ball.x - 5 <= array[i].x + 75){
        ball.moveY = -ball.moveY;
        array.splice(i, 1)
      }
    }
  }


}



module.exports = BrickArray;
