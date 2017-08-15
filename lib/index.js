var Block = require('./Block');


var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 5;
var dy = -5;
var ballRadius = 20;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    //left and right wall collision
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    //up and down wall collision
    //bottom will need to equal "GAME OVER" might be done by taking out left side of conditional
    if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
      dy = -dy;
    }

}

setInterval(draw, 10);
