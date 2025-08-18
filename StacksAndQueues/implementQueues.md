## Example of a Linked List (Circular) Queue Class Implementation
```
class EfficientHoldRequestQueue {
  constructor(initialCapacity = 10) {
    this.capacity = initialCapacity;
    this.requests = new Array(this.capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    console.log(`📋 Efficient hold request queue created (capacity: ${this.capacity})!`);
  }
  
  /**
   * Add a hold request to the back of the queue
   * @param {string} patronName - Name of the patron
   * @param {string} bookTitle - Title of the requested book
   * @returns {boolean} True if request was added successfully
   */
  addHoldRequest(patronName, bookTitle) {
    if (this.isFull()) {
      this.resize();
    }
    
    const request = new HoldRequest(patronName, bookTitle);
    this.requests[this.rear] = request;
    this.rear = (this.rear + 1) % this.capacity; // Circular increment
    this.size++;
    
    console.log(`📝 Added request: ${request.toString()}`);
    return true;
  }
  
  /**
   * Process the next hold request (remove from front)
   * @returns {HoldRequest|null} The processed request, or null if queue is empty
   */
  processNextRequest() {
    if (this.isEmpty()) {
      console.log("❌ No requests to process - queue is empty!");
      return null;
    }
    
    const request = this.requests[this.front];
    this.requests[this.front] = null; // Clear the slot
    this.front = (this.front + 1) % this.capacity; // Circular increment
    this.size--;
    
    console.log(`✅ Processed request: ${request.toString()}`);
    return request;
  }
  
  /**
   * Check who's next without processing the request
   * @returns {HoldRequest|null} The next request, or null if queue is empty
   */
  peekNextRequest() {
    if (this.isEmpty()) {
      console.log("👀 Queue is empty - no requests to peek at");
      return null;
    }
    
    const nextRequest = this.requests[this.front];
    console.log(`👀 Next request: ${nextRequest.toString()}`);
    return nextRequest;
  }
  
  /**
   * Check if the queue is empty
   * @returns {boolean} True if queue is empty, false otherwise
   */
  isEmpty() {
    return this.size === 0;
  }
  
  /**
   * Check if the queue is full
   * @returns {boolean} True if queue is full, false otherwise
   */
  isFull() {
    return this.size === this.capacity;
  }
  
  /**
   * Get the number of requests in the queue
   * @returns {number} The number of pending requests
   */
  getRequestCount() {
    return this.size;
  }
  
  /**
   * Resize the queue when it becomes full
   * @private
   */
  resize() {
    const newCapacity = this.capacity * 2;
    const newRequests = new Array(newCapacity);
    
    // Copy existing requests to new array in order
    for (let i = 0; i < this.size; i++) {
      const index = (this.front + i) % this.capacity;
      newRequests[i] = this.requests[index];
    }
    
    this.requests = newRequests;
    this.front = 0;
    this.rear = this.size;
    this.capacity = newCapacity;
    
    console.log(`📈 Queue resized to capacity: ${this.capacity}`);
  }
  
  /**
   * Display the current state of the queue
   * @returns {string} A visual representation of the queue
   */
  displayQueue() {
    if (this.isEmpty()) {
      return "📋 Hold Request Queue: [Empty]";
    }
    
    let display = "📋 Hold Request Queue:\n";
    for (let i = 0; i < this.size; i++) {
      const index = (this.front + i) % this.capacity;
      const request = this.requests[index];
      const position = i === 0 ? "🔜" : `${i + 1}.`;
      display += `  ${position} ${request.toString()}\n`;
    }
    return display;
  }
}
```

## Key Insights About Queue Implementation
### Why Queues Are Challenging
- Two-ended access; unlike stacks, we need efficient operations at both ends.
- Performance trade-offs; simple implementations can be slow.
- Memory management; efficient implementations require careful pointer management.

### When to Use Different Implementations
- Simple Array Queue: small queues, educational purposes, prototyping
- Circular Array Queue: large queues, performance critical applications
- Linked List Queue: When dynamic sizing is crucial, memory is abundant

### Best Practices
- Always consider performance. O(n) operations can become bottlenecks
- Plan for growth. Implement resizing or use dynamic structures
- Test edge cases. Empty queues, full queues, single-element queues

## Key Takeaways
- Queue Implementation is more complex than stack implementation due to two-ended access
- Simple array queues have O(n) dequeue operations due to element shifting
- Circular array queues achieve O(1) operations through clever pointer management
- Performance matters - the difference between O(1) and O(n) is significant with large datasets
- Real-world applications include computer reservations, event registration, and any fair-processing system.
- Implementation choice depends on requirements - simplicity vs performance vs memory usage
- Proper error handling and edge cases are crucial for robust queue implementations

## Modular Arithmetic
Using the % operator to wrap around when the rear or front pointer reaches the end of the array, creating the "circular" behavior.