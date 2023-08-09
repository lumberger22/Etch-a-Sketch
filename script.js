//Query Selectors
const container = document.querySelector('.container');

//Variable Declarations
const containerID = document.getElementById('containerID')
const newGridBtn = document.getElementById('new-grid')
let oldGridSize = 16;

//Actions
window.onload = drawGrid(16);
newGridBtn.addEventListener('click', drawNewGrid);

//Functions
function drawGrid(numberOfGrids) {
    for (let i = 1; i <= Math.pow(numberOfGrids, 2); i++) {
        window['grid' + i] = document.createElement('div');
        window['grid' + i].style.border = 'solid black';
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

function addStyle(element) {
    element.style.backgroundColor = 'grey';
}

function resetStyle() {
    for (let i = 1; i <= Math.pow(oldGridSize, 2); i++) {
        window['grid' + i].style.backgroundColor = 'white';
    }
}

function drawNewGrid(number) {
    for (let i = 1; i <= Math.pow(oldGridSize, 2); i++) {
        window['grid' + i].remove();
    }

    drawGrid(number);
}