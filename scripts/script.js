const container = document.querySelector('.container');

// create initial grid
const initialSize = 16;
createGrid(initialSize);

// hold grid size value for reset function
let currentGridSize = initialSize;

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) { // create rows
        
        let newRow = document.createElement('div');
        newRow.setAttribute('id', 'row' + i);

        newRow.style.width = '100%'
        newRow.style.display = 'flex';
        newRow.style.flexDirection = 'column';
        newRow.style.justifyContent = 'space-evenly'

        container.appendChild(newRow);
        
        for (let j = 0; j <gridSize; j++){ // create columns
            
            let divID = [i,j]; // coordinate-based ID
            let newBox = document.createElement('div');
            newBox.setAttribute('id', divID);
            newBox.setAttribute('class', 'box')

            newBox.style.height = '100%'

            newRow.appendChild(newBox);
        }
    }
    setHover();
}

function setHover() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#808080';
    }));
}

function getNewGridSize() {
    let newSize = prompt('Enter a new grid size (up to 100)', '16');
    while (newSize <= 0 || newSize > 100) {
        alert('Invalid input. Enter a number between 1 and 100');
        newSize = prompt('Enter a new grid size (up to 100)', '16');
    }

    return Math.floor(newSize);
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(getNewGridSize());
}