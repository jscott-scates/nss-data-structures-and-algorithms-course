## Indexing and Bound Checking in Grids
Similar to staying in your lane when you are driving, you want to make sure that you are accessing valid positions in your grid.

## Accessing Elements in 2D Arrays
You need both the row and the column position to pinpoint exactly where you want to go. Arrays are zero-indexed which means the first row and column are row 0, column 0.
```
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing element at row #1 (the second row), column #2 (the third column)
const element = grid[1][2]; // 6
```

## Understanding Array Dimensions
- Number of Rows dictates the *height* of the grid
- Number of Columns dictates the *width* of the grid

*Note: When analyzing algorithms that work with 2D arrays, complexity is often expressed in the total number of cells (nm) when traversing through the grid. When accessing a a single cell, the time is constant O(1).*

Example:
```
const grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

const rows = grid.length; 
const columns = grid[0].length;
```

## Bounds Checking 
Bounds checking confirms that there is a valid element before you perform the operation there. Essentially a safety net that prevents you from falling off the edges of the grid.

- Prevents Crashes
- Ensures data integrity; you are only accessing data that exists
- Makes your code more robust; can handle edge cases
- Saves debugging time since it catches problems before they become bugs. 

Common Bounds Checking Pattern Example:
```
function isValidCell(grid, row, col) {
  return (
    row >= 0 &&           // Not above the grid
    row < grid.length &&  // Not below the grid
    col >= 0 &&           // Not left of the grid
    col < grid[0].length  // Not right of the grid
  );
}

// Usage example
if (isValidCell(grid, row, col)) {
  // Safe to access grid[row][col]
  console.log("Found valid cell:", grid[row][col]);
} else {
  console.log("Oops! That position is out of bounds!");
}
```

## Traversing 2D Arrays
### Row-Major Traversal
Row by Row from left to right
```
function traverseRowMajor(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Process grid[i][j]
      console.log("Visiting cell at row", i, "column", j, ":", grid[i][j]);
    }
  }
}
```

### Column-Major Traversal
Column by column from left to right. Less common but sometimes is what you need.
```
function traverseColumnMajor(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      // Process grid[i][j]
      console.log("Visiting cell at row", i, "column", j, ":", grid[i][j]);
    }
  }
}
```
### Handling Irregular Grids
JavaScript allows "jagged" arrays where each row can have a different length.
```
const jaggedGrid = [
  [1, 2, 3],      // First floor has 3 rooms
  [4, 5],         // Second floor has 2 rooms
  [6, 7, 8, 9]    // Third floor has 4 rooms
];

// Safe traversal of jagged array
function traverseJagged(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      console.log("Value at", i, j, ":", grid[i][j]);
    }
  }
}
```

## Common Pitfalls and Solutions

### Forgetting Bound Checks
- Always use bounds checking before accessing array elements

### Row/Column Confusion
- Use consistent naming (row/i, col/j) throughout your code
- Think "row then column"

### Off-by-One Errors
- Double Check your loop conditions
- Array indices start at 0 and go up to length -1

