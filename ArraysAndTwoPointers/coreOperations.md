## Core Array Operations
1. Add
2. Remove
3. Update
4. Access

## Add
- Add songs to the end of an array via .push() (O(1) Constant Time Complexity)
- Add songs to the start of an array via .unshift() (O(n) Linear Time Complexity due to shifting the array to the right)
- Add songs to the middle of an array via  .splice() (O(n) Linear Time Complexity due to shifting the array.)

## Remove
- Removing from the end of an array via .pop() (O(1) Constant Time Complexity)
- Removing from the start of an array via .shift() ((O(n) Linear Time Complexity due to the shifting elements))
- Removing from the middle of an array via .splice() (O(n) Linear Time Complexity due to shifting elements.) 

## Update
Updating an array element is like replacing one song with another in specific position. It's accessed directly which makes it efficient and preserves the overall structure of the array. This is an O(1) Constant Time Complexity Task

## Access
Instant or Direct Access to any element when the position (index) is know is quick and efficient and operates at a O(1) Constant Time Complexity no matter how many elements are in the array as we know the index. 

Accessing element via a search increases the time complexity to O(n) or Linear Time Complexity. This includes:
    - searching by the name or title using .forEach()
    - searching by .find()
    - searching by .filter() which finds all the elements in the array that could meet a set of criteria