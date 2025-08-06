//My Solution

/*Problem: Increment All Neighbors

Given a 2D array (matrix) of numbers and a target cell (row, col), increment all **immediate neighbors** (up, down, left, right) of that cell by 1.

The input matrix should be updated in-place.
*/

function incrementNeighbors(matrix, row, col) {
    const directionalRow = [-1,0,1,0]
    const directionalCol = [0,-1,0,1]
  
    for (let r = 0; r < directionalRow.length; r++){
      const newRow = row + directionalRow[r]
      const newCol = col + directionalCol[r]
      
      if (newRow >= 0 && newRow < matrix.length &&
        newCol >= 0 && newCol < matrix[0].length
      ){
        matrix[newRow][newCol] +=1 //original issue was that I was pushing the updated value into it's own new array rather than updating the array in place.
      }
    }
    return matrix
  }
  
  matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]

  console.log(incrementNeighbors(matrix,0,0))

//Solution was not accepted by the software below is the solution
function incrementNeighbors(matrix, row, col) {
    const directions = [
      [-1, 0], // up
      [1, 0],  // down
      [0, -1], // left
      [0, 1]   // right
    ];
  
    for (const [dr, dc] of directions) {
      const r = row + dr;
      const c = col + dc;
      if (r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length) {
        matrix[r][c] += 1;
      }
    }
  }
