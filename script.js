//Query Selectors
const container = document.querySelector('.container');

//Variable Declarations
const containerID = document.getElementById('containerID')
const newGridBtn = document.getElementById('new-grid')
const clearStylesBtn = document.getElementById('clear-styles')
let oldGridSize = 16;

//Actions
window.onload = drawGrid(16);
newGridBtn.addEventListener('click', drawNewGrid);
clearStylesBtn.addEventListener('click', resetStyle);

//Functions
function drawGrid(numberOfGrids) {
    for (let i = 1; i <= Math.pow(numberOfGrids, 2); i++) {
        window['grid' + i] = document.createElement('div');
        window['grid' + i].style.width = ((450)/numberOfGrids) + 'px';
        window['grid' + i].style.height = ((450)/numberOfGrids) + 'px';
        window['grid' + i].style.boxSizing = 'border-box';
        containerID.appendChild(window['grid' + i]);
        window['grid' + i].addEventListener('mouseenter', function(e) {
            window['grid' + i].style.backgroundColor = 'grey';
        });
    }

    oldGridSize = numberOfGrids;
}

function resetStyle() {
    for (let i = 1; i <= Math.pow(oldGridSize, 2); i++) {
        window['grid' + i].style.backgroundColor = 'lightgrey';
    }
}

function drawNewGrid() {
    
    let gridSize = prompt('What size window would you like to use? Ex: 20, 50, 70')
    for (let i = 1; i <= Math.pow(oldGridSize, 2); i++) {
        window['grid' + i].remove();
    }

    drawGrid(gridSize);
}