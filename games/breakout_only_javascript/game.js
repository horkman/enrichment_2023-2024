/*
 * 2D Breakout game using JavaScript!
 */

// Get a reference to our HTML canvas and the canvas's context
// so we can draw on it
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Define how big the ball is
const ballRadius = 10;

// Initial starting point of the ball
let x = canvas.width / 2;
let y = canvas.height - 30;

// Define how pany pixels the ball will move each frame
let dx = 2;
let dy = -2;

let ballColor = getRandomColor();
let paddleColor = getRandomColor();

// Boolean variables to track if the keyboard keys were pressed
let rightPressed = false;
let leftPressed = false;

// Define the size of the paddle
const paddleHeight = 10;
const paddleWidth = 75;
// Starting point of the paddle on the x axis
let paddleX = (canvas.width - paddleWidth) / 2;

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = paddleColor;
  ctx.fill();
  ctx.closePath();
}

/*
 * This function will generate a random HTML hex color
 * Example: #0095DD
 */
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

/*
 * This function just simple draws a
 * small circle on the canvas
 */
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();
}

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/*
 * This function will draw our game every "frame"
 */
function draw() {
  // Don't forget to clear the screen first!
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();
  drawPaddle();

  const isAboutToHitRightWall = x + dx > canvas.width;
  const isAboutToHitLeftWall = x + dx < 0;
  if (isAboutToHitRightWall || isAboutToHitLeftWall) {
    // We hit a wall!
    dx = -dx;
    ballColor = getRandomColor();
    const pingAudio = new Audio("./sounds/hammer.mp3");
    pingAudio.play();
  }

  const isAboutToHitTopWall = y + dy < ballRadius;
  const isAboutToHitBottomWall = y + dy > canvas.height - ballRadius;
  if (isAboutToHitTopWall) {
    dy = -dy;
    ballColor = getRandomColor();
    const pingAudio = new Audio("./sounds/hammer.mp3");
    pingAudio.play();
  } else if (isAboutToHitBottomWall) {
    const isAboutToHitPaddle = x > paddleX && x < paddleX + paddleWidth;
    if (isAboutToHitPaddle) {
      dy = -dy;
      ballColor = getRandomColor();
      const pingAudio = new Audio("./sounds/hammer.mp3");
      pingAudio.play();
    } else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval);
    }
  }

  // Update the position of the paddle
  if (rightPressed) {
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }

  // Update X and Y so the ball will
  // draw in a new spot next "frame"
  x = x + dx;
  y = y + dy;
}

// Every 10 milliseconds, run the "draw" function
// (or another way to think about it is "each frame run the draw function")
const interval = setInterval(draw, 10);
