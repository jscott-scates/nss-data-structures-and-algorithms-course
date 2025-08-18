// Complete the Stack implementation below
// You need to implement the missing methods to make the tests pass

class Stack {
  constructor() {
    this.items = [];
  }
  
  // TODO: Implement push method
  // Add an item to the top of the stack
  push(item) {
    this.items.push(item)
  }
  
  // TODO: Implement pop method
  // Remove and return the top item from the stack
  // Throw an error if stack is empty
  pop() {
    if(this.isEmpty()){
        throw new Error("This stack is empty, there are no items to process.")
    }
    return this.items.pop()
  }
  
  // TODO: Implement peek method
  // Return the top item without removing it
  // Throw an error if stack is empty
  peek() {
    if(this.isEmpty()){
        throw new Error("This stack is empty, there are no items to process.")
    }
    return  this.items.peek[this.items.length-1]
  }
  
  // TODO: Implement isEmpty method
  // Return true if stack is empty, false otherwise
  isEmpty() {
    return this.items.length === 0;
  }
  
  // TODO: Implement size method
  // Return the number of items in the stack
  size() {
    this.items.length
  }
}