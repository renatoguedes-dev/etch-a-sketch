const blackMode = document.querySelector(".black-mode");
const rainbowMode = document.querySelector(".rainbow-mode");
const whiteMode = document.querySelector(".white-mode");
const resetCanvasBtn = document.querySelector(".reset-canvas");
const sizeValue = document.querySelector("#size-value");
const gridSizeInput = document.querySelector("#grid-size");
const canvas = document.querySelector(".canvas");
let targetColor = "rgb(0, 0, 0)";
let rainbowIsOn = false;

// sets the initial value to 16 on the input bar
let currentGridValue = gridSizeInput.value = 16;

// sets minimum value for the input bar
gridSizeInput.min = 3;

// sets max value on the input bar
gridSizeInput.max = 64;

function createCanvas(size) {
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size**2; i++) {

    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div");

    canvas.appendChild(squareDiv);
    squareDiv.addEventListener("mouseover", changeColor);
  }
}

createCanvas(16);

function changeColor(e) {
  const targetDiv = e.target;

  // Get the current background color of the target div
  const currentColor = window.getComputedStyle(targetDiv).backgroundColor;

  if (rainbowIsOn) {
    randomRainbowColors();
  }

  if (currentColor === targetColor) {
    return;
    
  } else {
    targetDiv.style.backgroundColor = targetColor;
  }
}

function changeToBlackColor() {
  targetColor = "rgb(0, 0, 0)";
  rainbowIsOn = false;
}

function changeToRainbowColor() {
  rainbowIsOn = true;
}

function randomRainbowColors() {
  targetColor = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`;
}

function changeToWhiteColor() {
  targetColor = "rgb(255, 255, 255)";
  rainbowIsOn = false;
}

function resetCanvas() {
  const allSquareDivs = document.querySelectorAll(".square-div");
  const arraySquareDivs = Array.from(allSquareDivs);
  arraySquareDivs.forEach(div => {
    div.style.backgroundColor = "rgb(255, 255, 255)";
  });
}

function changeGridSizeInput(value) {
  updateSizeDisplay(value);
  resetCanvas();
}

function updateSizeDisplay(value) {
  sizeValue.textContent = `${value} x ${value}`;
}

gridSizeInput.onmousemove = (e) => {
  currentGridValue = e.target.value;
  updateSizeDisplay(currentGridValue);
}

gridSizeInput.onchange = (e) => {
  currentGridValue = e.target.value;
  changeGridSizeInput(currentGridValue);
  createCanvas(currentGridValue);
};

blackMode.addEventListener("click", changeToBlackColor);
rainbowMode.addEventListener("click", changeToRainbowColor);
whiteMode.addEventListener("click", changeToWhiteColor);
resetCanvasBtn.addEventListener("click", resetCanvas);
