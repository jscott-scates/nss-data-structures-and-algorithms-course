
    /*
Problem: Increment All Neighbors
Attempt #3 - self guided with additional notes
*/
function getNeighbors(grid, row, col) {
    // Return an array of top, bottom, left, right neighbor values
    const dr = [-1,1,0,0] //top, right, bottom, left
    const dc = [0,0,-1,1]

    let neighbors = []

    for (let r = 0; r < dr.length; r++){
        const newRow = row + dr[r]  //calculates the row index of the neighboring cell by adding the directional offset dr[r] to the current row
        const newCol = col + dc[r]  //calculates the column indexof the neighboring cell by adding the directional offset dc[r] to the current row

        if (                        //bounds checking to make sure that the new row and new columns do not exist outside of the current grid.
            newRow >= 0 && newRow < grid.length &&
            newCol >= 0 && newCol < grid[0].length
        ){
            neighbors.push(grid[newRow][newCol]) //only if the neighbor position is valid does it get added to the neighbors array.
        }
    }

    return neighbors
  }

  matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]

  console.log(getNeighbors(matrix,1,1))

  //Problem: Return Neighbor Values
//Write a function getNeighbors that returns an array of the values of all valid neighbors 
//(top, bottom, left, right) of a given cell (row, col) in a 2D array. Do not modify the original grid.

/*
Problem: Increment All Neighbors
*/

/* Base Solve
function getNeighbors(grid, row, col) {
    // Return an array of top, bottom, left, right neighbor values
    let neighborsArray = []

    if (row > 0){
        neighborsArray.push(grid[row-1][col])
    }
    if (row < grid.length-1){
        neighborsArray.push(grid[row+1][col])
    }
    if (col > 0){
        neighborsArray.push(grid[row][col-1])
    }
    if (col < grid[0].length - 1){
        neighborsArray.push(grid[row][col+1])
    }
    
    return neighborsArray
    
}

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

console.log(getNeighbors(matrix,1,1)) // expecting cardinal values around 2, the anticipated array is [1,5,3]

//Iterate through the array and see if the cell is cardinally related to the cell in question
//if the cell does not border the cell in question do nothing, else, get the value of the cell and put it into the neighborsArray 
Attempt #2 - Guided with ChatGPT
function getNeighbors(grid,row,col){
    const dr = [-1,0,1,0]; //row directions, look at base example to see where they came from if confused (up, right, down, left)
    const dc = [0,-1,0,1]; // column directions, look at base example to see where they came from if confused (up, right, down, left)

    let neighborsArray = [];

    for (let r = 0; r < dr.length; r++ ){
        const newRow = row + dr[r];
        const newCol = col + dc[r];

        if (
            newRow >= 0 && newRow < grid.length &&
            newCol >= 0 && newCol < grid[0].length
        ){
            neighborsArray.push(grid[newRow][newCol])
        }
    }

    return neighborsArray
}

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(getNeighbors(matrix, 0, 0)) */