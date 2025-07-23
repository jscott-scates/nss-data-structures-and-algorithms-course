/*
Problem: Reverse Array In-Place

Write a function that reverses an array in-place without using any built-in reverse methods or creating a new array.

Follow-up Questions:
- What is the time complexity of your solution?
    O(n) or liner time complexity as there is only one for loop in the algorithm.
- What is the space complexity?
    O(n) or linear space complexity as the number of inputs within the array increases the amount of space used by the algorithm
- Can you solve this using the two-pointer technique?
    Yes
*/

function reverseArray(arr) {
  // Reverse an array in-place without using built-in methods
  // Requirements:
  // - Modify the original array directly (in-place)
  // - Do not use built-in reverse() method
  // - Do not create a new array
  // - Use only constant extra space
  //
  // Example:
  // Input: [1, 2, 3, 4, 5]
  // Output: [5, 4, 3, 2, 1] (original array is modified)

  // Your code here
  //for each item in the array, starting with the last item
  //.pop removes the last item from the array
  //.push adds a new item to the end of the array
  //.length for the forloop 
  //.unshift the number adds item to the beginning of the array

  //.sort method is another example

  //initial solve but increases the space complexity from O(1) to O(n)
  //for(let i=0; i < arr.length; i++){
  //let currentLastItem = arr.pop()
  //arr.splice(i,0,currentLastItem)
  //console.log(`looped ${i} last item: ${currentLastItem} array: ${arr}`)
  //}
  let left = 0; //starts at the first index in the array
  let right = arr.length - 1; //starts at the last index in the array

  while (left < right) { //loop while left is less than right
    //swap elements
    // Compressed syntax. Harder to read
    // [arr[left],arr[right]] = [arr[right],arr[left]];


    // Expanded syntax
    const tempRightValue = arr[right];
    const tempLeftValue = arr[left];
    arr[left] = tempRightValue;
    arr[right] = tempLeftValue;

    left++;
    right--;
  }
  return arr

}
letInputArray = [
  "a",
  3,
  {
    key: 1,
  },
  [1, 2, 3, 4],
  undefined
]
console.log(reverseArray(letInputArray))


