let size = 20
let styleName = 'background-color'
let color = 'black'


// Capturing Buttons
const container = document.querySelector('.container')
const sizeButtons = document.querySelectorAll('.sizeButton')
const resetButton = document.getElementById('reset')
const eraseButton = document.getElementById('erase')
const blackButton = document.getElementById('black')

// EventListeners for each button
resetButton.addEventListener('click', reset)
eraseButton.addEventListener('click', erase)
blackButton.addEventListener('click', drawBlack)

// Get user's input on size of gird
sizeButtons.forEach((button) => {
    button.addEventListener('click', gridSize)
})

// Default size with drawing function 




// Passes user's input fize to create grid of specific size
function gridSize(button) {
    size = this.id
    createGrid(size)
}

function createGrid(size) {

    container.innerHTML = "" // used to clear the grid

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

function drawBlack(color) {
    console.log('click')
    const rows = document.querySelectorAll('div.row')
    rows.forEach((row) => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = color
        })
    })
}

function reset() {
    container.innerHTML = ''
    createGrid(size)
    drawBlack(color)
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
    drawBlack(color)
}
start(size, color)
