## 2D Arrays
Matrix is another word for 2Dimensional Arrays
```
const gameBoard = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
```
Organizes data within rows and columns similar to spreadsheets or a chessboard
    Images are arrays, use 2D Arrays to manage pixels and colors (rasscal images)

## BAsic Griod Operations
Using 0 based indexing with elements each way for both rows, columns
first element [0][0]

Area = rows multiplied by columns

Rows do not always have to be the same length

Bounds Checking
Row index is not negative

Validation prevents index out of bounds errors and ensures data integrity dyuring grid operations


function getAverageBrightness(image) {
  return 0; //replace with actual calculation
}

// Test image (small grayscale image)
const image = [
    [100, 200, 150, 50],
    [60, 170, 140, 90],
    [80, 110, 220, 130],
    [30, 70, 160, 190]
];

const averageBrightness = getAverageBrightness(image);
console.log('Average Brightness:', averageBrightness);

//wants to return the average brightness of the array