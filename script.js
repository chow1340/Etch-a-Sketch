
const black = document.querySelector('.black');
const eraser = document.querySelector('.eraser');
const random = document.querySelector('.random');
function Choice() {
    if (black.checked) {
       return 'black'
    } else if (eraser.checked) {
        return 'white'
    } else if (random.checked){
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i=0; i<6; i++){
            color += letters[Math.floor(Math.random()*16)];
        }
        return color; 
    }
}

let numCols = 16



function createColumns(numCols){
    for (c=0; c<numCols; c++){
        const column = document.createElement('div');
        column.classList.add('column')
        container.appendChild(column);
        /* container.style.setProperty('--numCols', numCols) */
        column.addEventListener('mouseover', function(){
            column.style.backgroundColor= Choice()
        })
    }

}

let user = 16


let test = user -1 ;
let numRows = test*numCols // number of rows created
const container = document.querySelector('.container');

function createRows(numRows){
    for (r=0; r<numRows; r++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        /* container.style.setProperty('--numRows',test); */
        row.addEventListener('mouseover', function(){
            row.style.backgroundColor = Choice()
        })
    }
}



document.getElementById('resetButton').addEventListener('click', function(){
    container.textContent = ''
    let numColsReset = document.getElementById('colNum').value
    let numRowsReset = document.getElementById('rowNum').value
    container.style.setProperty('--numCols', numColsReset);
    
    
    let numRowsCalculation = numColsReset * numRowsReset;
    container.style.setProperty('--numRows', numRowsReset);
    createColumns(numColsReset);
    createRows(numRowsCalculation);
    
})
 