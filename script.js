// JAVASCRIPT FOR ETCH-A-SKETCH

let body = document.querySelector('body');

body.id = 'body';
body.style.display = flex;

let container = document.createElement('div');

document.getElementById('body').appendChild(container);
container.id = 'container';

let div = document.createElement('div');

for (let i = 1; i < 5; i++)
{
    const row = div.cloneNode(true);
    document.getElementById('container').appendChild(row);
    row.id = `row${i}`;

    for (let j = 1; j < 4; j++)
    {
        const column = div.cloneNode(true);
        document.getElementById(`row${i}`).appendChild(column);
        column.id = `column${j}`;
    }
}