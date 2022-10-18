


const container = document.querySelector('.container')

createGrid()
draw()

function createGrid() {

    for (let i = 0; i < 16; i++) {
        const column = document.createElement('div')
        column.classList.add('column')
        container.appendChild(column)


        for (let j = 0; j < 16; j++) {
            const row = document.createElement('div')
            row.classList.add('row')
            column.appendChild(row)


        }
    }
}

function draw() {
    const rows = document.querySelectorAll('div.row')
    rows.forEach((row) => {
        row.addEventListener('mouseover', () => {
            row.setAttribute('style', 'background-color: black')
        })
    })
}


