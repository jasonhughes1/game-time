const Brick = require('./Brick');

class BrickArray {
  constructor (r, c) {
    this.r = r;
    this.c = c;
    this.brickField = [];
  }

  populateArray () {
    for (let rows = 0; rows < this.r; rows++) {
      for (let col = 0; col < this.c; col++) {
        let y = 300 + (30 * rows);
        let x = 200 + (112 * col);

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
  // console.log('ball x: ', ball.x);
  // console.log('ball y: ', ball.y);
  // console.log('array: ', array);
    for (var i = 0; i < array.length; i++) {

      if (ball.y - ball.radius <= array[i].bottom &&
        ball.y - ball.radius >= array[i].top &&
        ball.x + ball.radius <= array[i].right &&
        ball.x + ball.radius >= array[i].left) {
        ball.moveY = -ball.moveY;
        array.splice(i, 1);
        // console.log('BOOM' array[i]);
        // debugger
        // console.log('BROKEN!!!!!!!!!!!!!');
      }

      // if (ball.y + ball.radius >= array[i].top &&
      //   ball.y + ball.radius <= array[i].bottom &&
      //   ball.x + ball.radius <= array[i].right &&
      //   ball.x + ball.radius >= array[i].left) {
      //   ball.moveY = -ball.moveY;
      //   array.splice(i, 1)
      //   console.log('BROKEN!!!!!!!!!!!!!');
      // }
    }
  }
}


module.exports = BrickArray;
