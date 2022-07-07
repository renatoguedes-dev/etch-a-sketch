// generate the grid with the desired amount of squares

const grid = document.getElementById('grid');

function createGrid(squareAmount) {
  for (let i = 1; i <= squareAmount**2; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('square-div');
    grid.appendChild(newDiv);
  }

  const squareDiv = Array.from(document.getElementsByClassName('square-div'));
  squareDiv.forEach(div => div.addEventListener('mouseover', () => 
  div.style.backgroundColor = "aquamarine"))
}



createGrid(16);

