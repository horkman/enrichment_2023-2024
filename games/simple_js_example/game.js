// Initialize canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Initial square position
let x = 225;
let y = 225;

// Draw the initial square
function drawSquare() {
  // Set background color to green
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw square
  ctx.fillStyle = "#000";
  ctx.fillRect(x, y, 50, 50);
}

drawSquare();

// Function to move the square
function moveSquare(event) {
  const speed = 5; // Change as needed

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  switch (event.key) {
    case "ArrowUp":
      y = Math.max(y - speed, 0);
      break;
    case "ArrowDown":
      y = Math.min(y + speed, canvas.height - 50);
      break;
    case "ArrowLeft":
      x = Math.max(x - speed, 0);
      break;
    case "ArrowRight":
      x = Math.min(x + speed, canvas.width - 50);
      break;
  }

  drawSquare();
}

// Add event listener for keydown
document.addEventListener("keydown", moveSquare);
