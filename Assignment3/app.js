const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
let statusDiv = document.getElementById("status");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: null,
  y: null,
};

let shape = "";

function draw(shapes) {
  canvas.addEventListener("click", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    statusDiv.innerHTML = mouse.x + " | " + mouse.y;
    switch (shapes) {
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
}

function drawHalfCircle() {
  ctx.fillStyle = "purple";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI);
  ctx.fill();
  ctx.closePath();
}

function drawRectangle() {
  ctx.fillStyle = "red";
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
  canvas.removeEventListener("click", event);
}
