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

// Let's start off with a random ball color
let ballColor = getRandomColor();

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

/*
 * This function will draw our game every "frame"
 */
function draw() {
  // Don't forget to clear the screen first!
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw a ball
  drawBall();

  const isAboutToHitRightWall = x + dx > canvas.width;
  const isAboutToHitLeftWall = x + dx < 0;
  if (isAboutToHitRightWall || isAboutToHitLeftWall) {
    // We hit a wall!
    dx = -dx;
    ballColor = getRandomColor();
  }

  const isAboutToHitBottomWall = y + dy > canvas.height;
  const isAboutToHitTopWall = y + dy < 0;
  if (isAboutToHitBottomWall || isAboutToHitTopWall) {
    // We hit a wall!
    dy = -dy;
    ballColor = getRandomColor();
  }

  // Update X and Y so the ball will
  // draw in a new spot next "frame"
  x = x + dx;
  y = y + dy;
}

// Every 10 milliseconds, run the "draw" function
// (or another way to think about it is "each frame run the draw function")
setInterval(draw, 10);
