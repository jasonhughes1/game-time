const Brick = require('./Brick');

class BrickArray {
  constructor () {
    this.brickField = [];
  }

  populateArray () {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 8; c++) {
        let y = 20 + (30 * r);
        let x = 7 + (112 * c);

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

      if (ball.y - ball.radius <= array[i].bottom &&
        ball.y - ball.radius >= array[i].top &&
        ball.x + ball.radius <= array[i].right &&
        ball.x + ball.radius >= array[i].left) {
        // && ball.top <= array[i].top && ball.left >= array[i].left && ball.left <= array[i].right)
        ball.moveY = ball.moveY * -1;
        array.splice(i, 1)
      }

      // if (ball.x + 10 >= array[i].x - 100 && ball.x - 10 <= array[i].x + 100) {
      //   ball.moveX = ball.moveX * -1;
      //   array.splice(i, 1)
      // }
    }
  }
}


module.exports = BrickArray;
//find the middle of the block, on collision, at that point, is the balls x value greater than or less than that point
//think about the balls y being in between the blocks two y's

//use the midpoint, then look to make sure the balls y is greater than the blocks y, and the balls y + height is less than the blocks y +

//
//     if (ball.y - 10 <= array[i].y + 20 &&
//         ball.y + 10 >= array[i].y - 20 &&
//         ball.x + 10 >= array[i].x - 100 &&
//         ball.x - 10 <= array[i].x + 100) {
//       ball.moveY = ball.moveY * -1;
//       ball.moveX = ball.moveX * -1;
//       array.splice(i, 1)
//     }
//   }
// }
