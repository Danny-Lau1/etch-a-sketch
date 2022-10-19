let size = 20
const container = document.querySelector('.container')
const sizeButtons = document.querySelectorAll('.sizeButton')
const eraseButton = document.getElementById("erase")


// Default size with drawing function 
createGrid(size)
draw()

sizeButtons.forEach((button) => {
    button.addEventListener('click', gridSize)
})





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
    draw()
}

function draw() {
    const rows = document.querySelectorAll('div.row')
    rows.forEach((row) => {
        row.addEventListener('mouseover', () => {
            row.setAttribute('style', 'background-color: black')
        })
    })
}


