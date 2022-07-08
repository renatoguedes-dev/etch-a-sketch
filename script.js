// generate the grid with the desired amount of squares

const grid = document.getElementById('grid');

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 1; i <= size**2; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('square-div');
    newDiv.addEventListener('mouseover', changeColor)
    newDiv.addEventListener('mousedown', changeColor)
    grid.appendChild(newDiv);
  }
}

createGrid(16);

const sizeValue = document.getElementById('size-value');
const sizeSlider = document.getElementById('grid-size')

sizeSlider.max = 64;
sizeSlider.value = 16;

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  resetGrid()
}

function setCurrentSize(newSize) {
  currentSize = newSize
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

let currentColor = 'blue'
function changeColor(e) {
  e.target.style.backgroundColor = currentColor; 
}

// black mode button
const blackMode = document.getElementsByClassName('black-mode')[0];
blackMode.addEventListener('click', colorBlack);

function colorBlack() {
  const squareDiv = Array.from(document.getElementsByClassName('square-div'));
  squareDiv.forEach(div => div.addEventListener('mouseover', () => 
  div.style.backgroundColor = 'black'));
}

// rainbow mode button
const rainbowMode = document.getElementsByClassName('rainbow-mode')[0];
rainbowMode.addEventListener('click', colorRandom);

function colorRandom() {
  const squareDiv = Array.from(document.getElementsByClassName('square-div'));
  squareDiv.forEach(div => div.addEventListener('mouseover', () => 
  div.style.backgroundColor = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`));
}

// eraser button
const whiteButton = document.getElementsByClassName('white-mode')[0];
whiteButton.addEventListener('click', whiteColor);

function whiteColor() {
  const squareDiv = Array.from(document.getElementsByClassName('square-div'));
  squareDiv.forEach(div => div.addEventListener('mouseover', () => 
  div.style.backgroundColor = 'white'));
}

// reset canvas button
const resetCanvas = document.getElementsByClassName('reset-mode')[0];
resetCanvas.addEventListener('click', resetGrid);

function resetGrid() {
  const squareDiv = Array.from(document.getElementsByClassName('square-div'));
  squareDiv.forEach(div => div.style.backgroundColor = 'white');
  createGrid(currentSize)
}