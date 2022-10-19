let size = 20
let color = 'black'

// Capturing Buttons
const container = document.querySelector('.container')
const sizeButtons = document.querySelectorAll('.sizeButton')
const resetButton = document.getElementById('reset')
const eraseButton = document.getElementById('erase')
const blackButton = document.getElementById('black')

// Changing color with color picker
document.querySelector('#customColor').oninput = e => {
    color = e.target.value
    console.log(color)
    paint(color)
}

// EventListeners for each button
resetButton.addEventListener('click', reset)
eraseButton.addEventListener('click', erase)
blackButton.addEventListener('click', drawBlack)

// Get user's input on size of gird
sizeButtons.forEach((button) => {
    button.addEventListener('click', gridSize)
})

// Passes user's input fize to create grid of specific size
function gridSize(button) {
    size = this.id
    createGrid(size)
    paint(color)
}

// Create grid of certain size
function createGrid(size) {

    // used to clear the grid
    container.innerHTML = ""

    for (let i = 0; i < size; i++) {
        const column = document.createElement('div')
        column.classList.add('column')
        container.appendChild(column)

        for (let j = 0; j < size; j++) {
            const row = document.createElement('div')
            row.classList.add('row')
            column.appendChild(row)
        }
    }
}

// Changes paint color to black
function drawBlack() {
    color = 'black'
    paint(color)
}

// Paints with a certain color
function paint(color) {
    console.log(color)
    const rows = document.querySelectorAll('div.row')
    rows.forEach((row) => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = color
        })
    })
}

// 
function reset() {
    container.innerHTML = ''
    console.log(color)
    createGrid(size)
    paint(color)
}

function erase() {
    const rows = document.querySelectorAll('div.row')
    rows.forEach((row) => {
        row.addEventListener('mouseover', () => {
            row.setAttribute('style', 'background-color: white')
        })
    })
}

function start(size, color) {
    console.log('hello')
    createGrid(size)
    paint(color)
}
start(size, color)
