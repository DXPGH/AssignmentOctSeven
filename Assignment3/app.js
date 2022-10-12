// Get canvas and statusDiv
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
let statusDiv = document.getElementById("status");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Mouse X,Y object
const mouse = {
  x: null,
  y: null,
};

let shape = "";

function currshape(str) {
  shape = str;
}

// EventListener for Mouse Coordinates to display live
canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  statusDiv.innerHTML = mouse.x + " | " + mouse.y;
});

// EventListener for Canvas to draw each shape
canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  switch (shape) {
    case "halfCircle":
      drawHalfCircle();
      break;
    case "rectangle":
      drawRectangle();
      break;
    case "circle":
      drawCircle();
      break;
    default:
      console.log("No Shape was chosen.");
  }
});

function drawHalfCircle() {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI);
  ctx.fill();
  ctx.closePath();
}

function drawRectangle() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.rect(mouse.x, mouse.y, 150, 100);
  ctx.fill();
  ctx.closePath();
}

function drawCircle() {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
