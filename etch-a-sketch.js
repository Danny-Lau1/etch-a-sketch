


const container = document.querySelector('.container')

createGrid()


function createGrid() {

    for (let i = 0; i < 16; i++) {
        const column = document.createElement('div')
        container.appendChild(column)
        column.classList.add('column')
        column.textContent = "column"
        console.log(column)


        for (let j = 0; j < 15; j++) {
            const row = document.createElement('div')
            column.appendChild(row)
            row.textContent = "row"
            row.classList.add('row')
            console.log(row)


        }
    }
}
