/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var Brick = __webpack_require__(1);

	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var ballRadius = 10;
	var x = canvas.width / 2;
	var y = canvas.height - 30;
	var dx = 2;
	var dy = -2;
	var paddleHeight = 10;
	var paddleWidth = 75;
	var paddleX = (canvas.width - paddleWidth) / 2;
	var rightPressed = false;
	var leftPressed = false;
	var brickRowCount = 5;
	var brickColumnCount = 10;
	var brickPadding = 20;
	var brickOffsetTop = 30;
	var brickOffsetLeft = 30;

	//  BRICK HOUSE
	var bricks = [];
	for (c = 0; c < brickColumnCount; c++) {
	    bricks[c] = [];
	    for (r = 0; r < brickRowCount; r++) {
	        bricks[c][r] = { x: 0, y: 0, status: 1 };
	    }
	}
	console.log(bricks);

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	// PADDLE MOVEMENT
	function keyDownHandler(e) {
	    if (e.keyCode == 39) {
	        rightPressed = true;
	    } else if (e.keyCode == 37) {
	        leftPressed = true;
	    }
	}
	function keyUpHandler(e) {
	    if (e.keyCode == 39) {
	        rightPressed = false;
	    } else if (e.keyCode == 37) {
	        leftPressed = false;
	    }
	}

	function collisionDetection() {
	    for (c = 0; c < brickColumnCount; c++) {
	        for (r = 0; r < brickRowCount; r++) {
	            var b = bricks[c][r];
	            if (b.status == 1) {
	                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
	                    dy = -dy;
	                    b.status = 0;
	                }
	            }
	        }
	    }
	}

	//  DRAWING OF THE SHAPES
	function drawBall() {
	    ctx.beginPath();
	    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	    ctx.fillStyle = "#0095DD";
	    ctx.fill();
	    ctx.closePath();
	}
	function drawPaddle() {
	    ctx.beginPath();
	    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	    ctx.fillStyle = "#0095DD";
	    ctx.fill();
	    ctx.closePath();
	}

	function drawBricks() {
	    for (c = 0; c < brickColumnCount; c++) {
	        for (r = 0; r < brickRowCount; r++) {
	            if (bricks[c][r].status == 1) {
	                var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
	                var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
	                bricks[c][r].x = brickX;
	                bricks[c][r].y = brickY;
	                var brick = new Brick(brickX, brickY, ctx);
	                brick.draw();
	            }
	        }
	    }
	}
	console.log(bricks);

	function draw() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    drawBricks();
	    drawBall();
	    drawPaddle();
	    collisionDetection();

	    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
	        dx = -dx;
	    }
	    if (y + dy < ballRadius) {
	        dy = -dy;
	    } else if (y + dy > canvas.height - ballRadius) {
	        if (x > paddleX && x < paddleX + paddleWidth) {
	            dy = -dy;
	        } else {
	            // alert ("Game Over");
	            document.location.reload();
	        }
	    }

	    if (rightPressed && paddleX < canvas.width - paddleWidth) {
	        paddleX += 8;
	    } else if (leftPressed && paddleX > 0) {
	        paddleX -= 8;
	    }
	    x += dx;
	    y += dy;
	}

	setInterval(draw, 10);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	class Brick {
	  constructor(x, y, context) {
	    this.x = x;
	    this.y = y;
	    this.width = 75;
	    this.height = 20;
	    this.ctx = context;
	  }

	  draw() {
	    this.ctx.beginPath();
	    this.ctx.rect(this.x, this.y, this.width, this.height);
	    this.ctx.fillStyle = "#0095DD";
	    this.ctx.fill();
	    this.ctx.closePath();
	  }

	  move() {
	    this.y--;
	  }
	}

	module.exports = Brick;

/***/ })
/******/ ]);