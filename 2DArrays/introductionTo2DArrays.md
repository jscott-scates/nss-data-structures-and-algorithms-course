## Introduction to 2D Arrays
- Think of 2D Arrays as a digital spreadsheet or gameboard where you can organize data in both rows and columns
- Also known as a matrix, it's an array of arrays.

## Structure of 2D Arrays
||Col 0| Col 1| Col 2|
|-----|-----|-----|-----|
|Row 0| [0,0]|[0,1]|[0,2]|
|Row 1| [1,0]|[1,1]|[1,2]|
|Row 2| [2,0]|[2,1]|[2,2]|

Example in JavaScript:
```
const grid = [
    [1,2,3], //Row 0
    [4,5,6], //Row 1
    [7,8,9]  //Row 2
];
```
## Creating 2D Arrays
### Method 1: Literal Notation
This is the most straight forward way to write grid notation. You create an array and then list the nested arrays, separated by commas. You do not need to put each nested array on it's own line but it does improve readability. 
```
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```
### Method 2: Using Array.from()
Used to create a grid of a specific size where all elements are set the the same initial value.

```
const rows = 3;
const cols = 4;
const matrix = Array.from({length:rows}, () => Array(cols).fill(0));
```

### Method 3: Using Loops
Used when you need more control over how your array is populated, using nested loops gives you more flexibility.
```
const rows = 3
const cols = 3
const matrix = []

for (let r = 0; r < rows; r++){
    matrix[r]=[];
    for (let c = 0; c < cols; c++){
        matrix[r][c] = r * cols + c + 1 
    }
}
// Creates a 3x3 matrix with values 1 through 9
```

## Common Applications of 2D Arrays
- Game Development
- Image Processing through pixel manipulation or computer vision algorithms
- Scientific Computing
- Graph Algorithms

## Performance Considerations
- Access Time Complexity
    - Accessing a single element in a 2D array has a constant O(1) time complexity since we can directly jump to any row and column using array indices.
    - However, operations that need to traverse the entire grid (like searching for a value) have a O(n*m) notation where n is the number of rows and m is the number of columns.
- Memory Usage
    - A large 2D array takes up significant memory
- Cache locality
    - **Accessing elements row by row is usually faster than column by column**
- Jagged Arrays
    - Unlike other languages, JavaScript lets you have rows of different lengths, which can make operations trickier to handle and lead to unpredictable behavior. 
- Passing by reference
    - When you pass a 2D array to a function, you're giving it the keys to your home. Any changes it makes affects the original array which requires extra attention when in use.