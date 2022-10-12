function square() {
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = `<svg width="300" height="180">
  <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
  style="fill:yellow;stroke:black;stroke-width:5;opacity:0.5" />
</svg>`;
}

function rectangle() {
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = `<svg width="300" height="100">
    <rect width="300" height="100" style="fill:rgb(0,100,150);stroke-width:10;stroke:rgb(10,10,10)" />
</svg>`;
}

function circle() {
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = `<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="orange" stroke-width="4" fill="red" />
    </svg>`;
}
