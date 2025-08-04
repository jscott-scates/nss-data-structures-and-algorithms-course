## What makes an Array Special?
Arrays are a fundamental way to organize information that have the following key characteristics:

- Ordered Collection
- Indexed Access
- Dynamic in JavaScript (arrays can shrink or grow as needed when implemented in JavaScript)
- Flexible Content (such as different types of orders - strings, objects, table numbers)
- Contiguous Organization (stored efficiently in memory, making access fast)

## Arrays vs Other Ways of Organizing
|Organization Method|Strengths |Weaknesses | Coffee Shop Example|
|-----|-----|-----|-----|
|Arrays| Lightning-fast access by position, simple to understand| Slow to insert orders in the middle| Perfect for order queues|
|Lists(Linked)| Easy to insert priority orders| Slow to find "Whats the 5th order"| Good for constantly changing menus|
|Hash Tables| Super fast to find specific orders| No natural ordering |Great for customer preferences|
|Trees|Great for hierarchial data| Complex to manage | Useful for menu categories|

## Maintaining O(1) Constant Time Complexity When Leveraging Arrays
 - Using .push() keeps the time complexity at O(1) as the amount of time it takes to push an order into an array will be the same at 1 order or 100 orders. 
 - Using .pop() allows you to remove the last element of an array, maintaining O(1) time complexity
 - Using an array's index, you can alway access a specific property of the array -- myArray[0] -- for example accesses the first property of myArray. This maintains a 0(1) complexity as we know where in our memory to look for the specific element. 
 - Updating an existing property in an array maintains O(1) time complexity as there is no shifting but rather an overwriting of the existing element as you access it via the index. 
 - Getting the .length() of an array as JavaScript keeps track of this, it's always instant.

## O(n) Linear Time Complexity When Leveraging Arrays
- Using .splice() as every item in the array will be shifted to the right or left of where the item is inserted/removed. The more items in the array, the more shifting that is required.
- Using .shift() removes an item from the beginning of an array
- Using .unshift() to add to the beginning of the array as all items shift right.
- Using .indexOf() to search for a specific content may require searching each property in the array. The more items in the array, the longer it takes to search.

## Pro Tips for Array Success
1. **Design for the common case**, most operations should be fast (O(1))
2. **Batch slow operations**, if you need to do many insertions consider doing them all at once
3. **Use the right tool**, arrays are perfect for order collections with frequent end-access
4. **Keep it simple**, the most readable code is often the most maintainable
5. **Measure what matters**