// JAVASCRIPT FOR ETCH-A-SKETCH

function clearGrid() {
    const container = document.querySelector('.container');

    if (container !== null)
    {
        container.remove();
    }
}


function drawGrid() {
    clearGrid();

    let body = document.querySelector('body');
    let container = document.createElement('div');
    container.className = 'container';

    body.appendChild(container);

    let div = document.createElement('div');
    div.className = 'div';

    let gridDim = document.getElementById('grid-dim').value;

    for (let i = 0; i < (gridDim * gridDim); i++)
    {
        let square = div.cloneNode(true);

        container.appendChild(square);
    }

    let grid = container.querySelectorAll('.div');

    for (let i = 0; i < (gridDim * gridDim); i++)
    {
        grid[i].addEventListener('mouseover', () => { 
            grid[i].style.backgroundColor = document.getElementById("pixelColor").value; 
        });
    }

    let gridSize = `repeat(${gridDim}, auto)`;

    document.querySelector('.container').style.gridTemplateColumns = gridSize;
}


function updateGrid() {
    let gridSize = document.getElementById('grid-dim').value;

    document.getElementById('grid-dim-out').textContent = gridSize;
}