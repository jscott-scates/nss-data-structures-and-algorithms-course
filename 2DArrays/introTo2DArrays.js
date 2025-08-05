//For this exercise, you should write three functions that generate 2D arrays in different ways. 

const createPhoneLayout = () => {
    //TODO: Use literal notation to create a 3x3 matrix representing the placement of the numbers 1-9 on a telephone dialpad, then return that matrix
    const phoneKeys = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    return phoneKeys;
}

const createLoveArray = (width, height) => {
    //TODO: use Array.from() and Array.fill() to create a 2D array of heart emojis. It should return a 2D array with the appropriate number of columns and rows, with '❤️' as the value for each element.
    const rows = 3;
    const cols = 4;
    const matrix = Array.from({length:rows},()=> Array(cols).fill("❤️"))

    return matrix;
};

const createCheckerboard = (width, height) => {
    //TODO: Using loops, create and return a checkerboard pattern of the specified size, with the values '⬛' and '⬜', alternating.
    const rows = 4
    const cols = 4
    const matrix =[]
    
    for (let r = 0; r < rows; r++){
        matrix[r] = []
        for (let c=0; c < cols; c++){
            matrix[r][c] = (r+c)%2 === 0 ? '⬛': '⬜' //to assign color is r+c devisable by 2 if so make the square black, if not make the square white.
        }
    }
    return matrix;
};

// Utility function to print any 2D array. Note the use of the array functions .forEach and .join
const print2DArray = (array, title) => {
    console.log(title);
    array.forEach(row => console.log(row.join(' ')));
};


// Create and print a phone layout
const dialpad = createPhoneLayout();
print2DArray(dialpad, 'Phone Layout');

// Create and print a 10x10 checkerboard
const checkerboard = createCheckerboard(10,10);
print2DArray(checkerboard, 'Checkerboard Pattern');

// Create and print a grid of hearts
const loveArray = createLoveArray(12,6);
print2DArray(loveArray, 'Love Array');