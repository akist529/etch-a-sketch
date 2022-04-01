// JAVASCRIPT FOR ETCH-A-SKETCH

let div = document.createElement('div');
div.textContent = 'Div';

for (let i = 0; i < 4; i++)
{
    const row = div.cloneNode(true);
    document.getElementById('body').appendChild(row);
    row.id = `row${i}`;

    for (let j = 0; j < 3; j++)
    {
        const column = div.cloneNode(true);
        document.getElementById(`row${i}`).appendChild(column);
    }
}