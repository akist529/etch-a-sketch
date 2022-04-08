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
        square.textContent = i;

        container.appendChild(square);
    }

    let grid = container.querySelectorAll('.div');

    for (let i = 0; i < (gridDim * gridDim); i++)
    {
        grid[i].addEventListener('mouseover', () => { 
            grid[i].style.backgroundColor = 'black'; 
        });
    }
}