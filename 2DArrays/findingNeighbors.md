## Finding Neighbors in Grid-Based Problems
When "finding neighbors" we are looking at adjacent squares on the grid (think chessboard).

## Cardinal Directions (4 Way)
- North / Up
- South / Down
- East / Right
- West / Left

### Directions Arrays Approach
One way to handle directional movement is using a "direction array" that specify how to change the coordinate to move in each each direction.
```
// Direction arrays for up, right, down, left
const dr = [-1, 0, 1, 0];  // Row direction
const dc = [0, 1, 0, -1];  // Column direction

function getCardinalNeighbors(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  const neighbors = [];
  
  for (let i = 0; i < 4; i++) {
    const newRow = row + dr[i];
    const newCol = col + dc[i];
    
    // Check bounds
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      neighbors.push([newRow, newCol]);
    }
  }
  
  return neighbors;
}
```
**Understanding the Directions In the Direction Arrays Example**
|Direction |dr (row change)| dc (column change)| What it does|
|-----------|------------|------------------|--------------------|
|Up| -1|0|Go up 1 Row|
|Right|0|1|Stay on the same row, move 1 column right|
|Down|1|0|Go 1 row down|
|Left|0|-1|Stay on the same row, move 1 column left|

Since we always check exactly 4 directions when doing cardinal directions, we have a constant of 0(1) which is more efficient than scanning the entire grid which results in O(n*m)

## Diagonal Directions (8-Way)
Includes the original 4 cardinal directions in addition to the ancillary directions: Northwest, Northeast, Southwest, Southeast.
```
// Direction arrays for all 8 directions (starting from top, going clockwise)
const dr = [-1, -1, 0, 1, 1, 1, 0, -1];  // Row direction
const dc = [0, 1, 1, 1, 0, -1, -1, -1];  // Column direction

function getAllNeighbors(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  const neighbors = [];
  
  for (let i = 0; i < 8; i++) {
    const newRow = row + dr[i];
    const newCol = col + dc[i];
    
    // Check bounds
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      neighbors.push([newRow, newCol]);
    }
  }
  
  return neighbors;
}
```
Similar to the cardinal directions, the 8-way direction finding also O(1) time and space complexity.

## Knight's Moves
Using the chessboard example, knights move in an "L" shaped pattern.
```
// Knight's move patterns (all possible L-shapes)
const dr = [-2, -1, 1, 2, 2, 1, -1, -2];  // Row direction
const dc = [1, 2, 2, 1, -1, -2, -2, -1];  // Column direction

function getKnightMoves(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  const moves = [];
  
  for (let i = 0; i < 8; i++) {
    const newRow = row + dr[i];
    const newCol = col + dc[i];
    
    // Check bounds
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      moves.push([newRow, newCol]);
    }
  }
  
  return moves;
}
```

## An alternative to Parallel Arrays
The above directional arrays are considered an Anti-pattern, it makes code harder to read and maintain as associated with the directions. A cleaner structure is the have an object with named properties as shown below:

```
const DIRECTIONS = {
  UP: { dr: -1, dc: 0 },
  RIGHT: { dr: 0, dc: 1 },
  DOWN: { dr: 1, dc: 0 },
  LEFT: { dr: 0, dc: -1 }
};
```
However, in practice it is more common to use the parallel array solution due to performance as it is more memory-efficient and processes faster, and conventional. 

**You can create a commented out directions array to help create the parallel arrays if you are confused by them currently**

## Conditional Neighbors
There are times when you don't want all the neighbors based on a cardinal direction or ancillary directions or a pre-determined shape such as the knight's pattern. You may want to see if a cell meets a specific value or criteria.

Below is an example looking for same value neighbors.
```
function getSameValueNeighbors(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  const neighbors = [];
  const value = grid[row][col];
  
  // Direction arrays for up, right, down, left
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];
  
  for (let i = 0; i < 4; i++) {
    const newRow = row + dr[i];
    const newCol = col + dc[i];
    
    // Check bounds and same value
    if (
      newRow >= 0 && newRow < rows && 
      newCol >= 0 && newCol < cols &&
      grid[newRow][newCol] === value
    ) {
      neighbors.push([newRow, newCol]);
    }
  }
  
  return neighbors;
}
```

## Island Perimeter 
**A Common Interview Question**
- You are given a grid that represents a nautical map (where 1 represents land and 0 represents water)
- That map contains a single island (a group of 1 values all connected horizontally or vertically)
- Calculate the perimeter of the island (the total number of edges that border water or the grid boundary)
```function calculateIslandPerimeter(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;
    
    // Direction arrays for up, right, down, left
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Skip water cells
            if (grid[row][col] === 0) continue;
            
            // For each land cell, count edges that face water or boundary
            for (let i = 0; i < 4; i++) {
                const newRow = row + dr[i];
                const newCol = col + dc[i];
                
                //if this edge face water or a boundary, add it to the perimeter
                if (
                    newRow < 0 || newRow >= rows ||
                    newCol < 0 || newCol >= cols ||
                    grid[newRow][newCol] === 0
                ) {
                    perimeter++;
                }
            }
        }
    }
    
    return perimeter;
}

// Example usage:
const islandGrid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
];
const perimeter = calculateIslandPerimeter(islandGrid);
console.log(perimeter); // Output: 16
