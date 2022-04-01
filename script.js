// JAVASCRIPT FOR ETCH-A-SKETCH

let body = document.querySelector('body');

body.id = 'body';

let container = document.createElement('div');
container.style.display = "flex";

document.getElementById('body').appendChild(container);
container.id = 'container';

let div = document.createElement('div');
div.textContent = "div";
div.style.border = "5px solid black";

for (let i = 1; i < 5; i++)
{
    const column = div.cloneNode(true);
    document.getElementById('container').appendChild(column);
    column.id = `column${i}`;

    for (let j = 1; j < 4; j++)
    { 
        const row = div.cloneNode(true);
        document.getElementById(`column${i}`).appendChild(row);
        row.id = `row${j}`;
    }
}