// Complete the Queue implementation below
// You need to implement the missing methods to make the tests pass
class Queue {
  constructor() {
    this.items = [];
  }
  
  // TODO: Implement enqueue method
  // Add an item to the back of the queue
  enqueue(item) {
    this.items.push(item)
  }
  
  // TODO: Implement dequeue method
  // Remove and return the front item from the queue
  // Return null if queue is empty
  dequeue() {
    if(this.isEmpty()){
        return null
    }
    return this.items.shift()
  }
  
  // TODO: Implement peek method
  // Return the front item without removing it
  // Return null if queue is empty
  peek() {
    if(this.isEmpty()){
        return null
    }
    return this.items[0]
  }
  
  // TODO: Implement isEmpty method
  // Return true if queue is empty, false otherwise
  isEmpty() {
    return this.items.length === 0
  }
  
  // TODO: Implement size method
  // Return the number of items in the queue
  size() {
    return this.items.length
  }
}