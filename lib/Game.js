class Game {
  constructor() {
    this.livesLeft = 3;
    this.currentLevel = 1;
  }

  lostLife(ball) {
    if (Math.random() > .95) {
      // console.log(this.livesLeft);
    }
    if (ball.y > 601) {
      this.livesLeft--;
      ball.resetBall(this);

      // gameOver();
    }
  }

  // gameOver() {
  //   if (this.livesLeft === 0) {
  //     alert("Game Over!");
  //     location.reload();
  //   } else {
  //     // lives-number.innerHTML = `Lives: ${this.livesLeft}`
  //     }
  //   }
  // }
}




module.exports = Game;
