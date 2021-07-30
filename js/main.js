const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const randomize = document.querySelector('.randomize');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let stopper = 0;
let flag = 0;

const resolution = 20;
canvas.width = 400;
canvas.height = 400;

const COLS = canvas.width / resolution;
const ROWS = canvas.height / resolution;

function buildGrid() {
  return new Array(COLS).fill(null)
    .map(() => new Array(ROWS).fill(null)
      .map(() => Math.floor(Math.random() * 2)));
}

let grid = buildGrid();
var newGrid = grid
function update() {
  if (stopper === 0) {
    grid = nextGen(grid);
    newGrid = grid
    render(grid);
    requestAnimationFrame(update);
  }
}

function nextGen(grid) {
  const nextGen = grid.map(arr => [...arr]);
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      let numLiveNeighbour = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          const x_cell = col + i;
          const y_cell = row + j;
          if (x_cell >= 0 && y_cell >= 0 && x_cell < COLS && y_cell < ROWS) {
            let currentNeighbour = grid[x_cell][y_cell];
            numLiveNeighbour += currentNeighbour;
          }
        }
      }
      if (cell === 1 && numLiveNeighbour < 2) {
        nextGen[col][row] = 0;
      } else if (cell === 1 && numLiveNeighbour > 3) {
        nextGen[col][row] = 0;
      } else if (cell === 0 && numLiveNeighbour === 3) {
        nextGen[col][row] = 1;
      }
    }
  }
  return nextGen;
}

function render(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];

      ctx.beginPath();
      ctx.rect(col * resolution, row * resolution, resolution, resolution);
      ctx.fillStyle = cell ? 'black' : 'white';
      ctx.fill();
      ctx.stroke();
    }
  }
}

function searchName() {
  var searchResult = document.getElementById("searchResult")
  if (!flag) {
    searchResult.innerHTML = "<h3>Grid Doesn't Exists!</h3>"
    return;
  }
  var toSearch = document.getElementById("toSearch").value
  var cellToSearch = toSearch.split(",")
  if (cellToSearch.length !== 2) {
    searchResult.innerHTML = "<h3>Invalid Input</h3>"
    return;
  } else {
    if (cellToSearch[1] < 0 || cellToSearch[0] < 0 || cellToSearch[1] > 19 || cellToSearch[0] > 19) {
      searchResult.innerHTML = "<h3>This cell does not exist!</h3>"
    } else {
      if (newGrid[cellToSearch[1]][cellToSearch[0]] === 1) {
        searchResult.innerHTML = "<h3>This cell is alive!</h3>"
      }
      if (newGrid[cellToSearch[1]][cellToSearch[0]] === 0) {
        searchResult.innerHTML = "<h3>This cell is dead!</h3>"
      }
    }

  }
}

start.addEventListener('click', () => {
  flag = 1;
  searchResult.innerHTML = "<h3></h3>"
  stopper = 0;
  requestAnimationFrame(update);
})

randomize.addEventListener('click', () => {
  flag = 1;
  searchResult.innerHTML = "<h3></h3>"
  stopper = 1;
  grid = buildGrid();
  newGrid = grid
  render(grid);
})

stop.addEventListener('click', () => {
  stopper = 1;
})

