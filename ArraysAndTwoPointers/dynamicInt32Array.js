
// ==============================
// Exercise: Complete Alex's Dynamic Int32Array Implementation
// ==============================
// Your task: Implement the missing methods in Alex's Dynamic Int32Array class
// This will be used for high-performance audio processing!

class DynamicInt32Array {
    
    constructor(initialCapacity = 8) {
        // DO NOT CHANGE ANY CODE HERE!
        this._data = new Int32Array(initialCapacity);
        this._size = 0;
        this._capacity = initialCapacity;
    }
    
    // ==============================
    // BASIC PROPERTIES - IMPLEMENT THESE
    // ==============================
    
    size() {
        // TODO: Return the current number of elements
        // Hint: Use the _size property
        return this._size;
    }
    
    isEmpty() {
        // TODO: Return true if the array has no elements
        // Hint: Check if _size is 0
        return this._size === 0
    }
    
    capacity() {
        // TODO: Return the current capacity of the backing Int32Array
        // Hint: Use the _capacity property
        return this._capacity;
    }
    
    // ==============================
    // ACCESS METHODS - IMPLEMENT THESE
    // ==============================
    
    get(index) {
        // TODO: Return the element at the given index
        // Hint: Check bounds first, then return _data[index]
        // Throw error if index is out of bounds
        if (index < 0 || index >= this._size){
            throw newError(`Index ${index} out of bounds. Valid range is 0 to ${this._size - 1}`);
        }
        return this._data[index];
    }
    
    set(index, value) {
        // TODO: Set the element at the given index
        // Hint: Check bounds, convert value to int32, store old value, set new value, return old value
        // Use: const intValue = Math.floor(value) | 0; to convert to int32
        // Throw error if index is out of bounds
        if (index <0 || index >= this._size){
            throw new Error(`Index ${index} out of bounds. Valid range: 0 to ${this._size - 1}`);
        }
        //Ensure the value is a 32-bit integer
        const intValue = Math.floor(value) | 0;
        const oldValue = this._data[index];
        this._data[index] = intValue
        return oldValue
    }
    
    // ==============================
    // RESIZING METHODS - IMPLEMENT THESE
    // ==============================
    
    _resize(newCapacity) {
        // TODO: Resize the backing Int32Array to newCapacity
        // Hint: Create new Int32Array, copy elements, update _data and _capacity
        const oldData = this._data;
        this._data = new Int32Array(newCapacity);
        this._capacity = newCapacity;
        
        // Copy existing elements to new array
        for (let i = 0; i < this._size; i++) {
            this._data[i] = oldData[i];
        }
    }
    
    _ensureCapacity() {
        // TODO: Double the capacity if the array is full
        // Hint: Check if _size >= _capacity, then call _resize with double capacity
        if (this._size >= this._capacity){
            const newCapacity = this._capacity * 2;
            this._resize(newCapacity);
        }
    }
    
    // ==============================
    // ADDITION METHODS - IMPLEMENT THESE
    // ==============================
    
    append(value) {
        // TODO: Add integer value to the end of the array
        // Hint: Ensure capacity, convert to int32, add element, increment size
        // Use: const intValue = Math.floor(value) | 0; to convert to int32
        // Return the index where element was added
        this._ensureCapacity();
        const intValue = Math.floor(value) | 0;
        this._data[this._size] = intValue;
        this._size++;

        return this._size - 1
    }
    
    // ==============================
    // REMOVAL METHODS - IMPLEMENT THESE
    // ==============================
    
    removeAt(index) {
        // TODO: Remove and return element at the given index
        // Hint: Check bounds, store element, shift elements left, decrement size
        // Clear the last position with 0
        // Throw error if index is out of bounds
        if(index < 0 || index >= this._size){
            throw new Error(`Remove index ${index} out of bounds. Valid range: 0 to ${this._size - 1}`);
        }
        const removedValue = this._data[index]

        for (let i = index; i < this._size -1; i++){
            this._data[i] = this._data[i + 1];
        }

        this._size--;
        this._data[this._size]=0

        return removedValue
    }
    
    
    // ==============================
    // UTILITY METHODS - IMPLEMENT THESE
    // ==============================
    
    clear() {
        // TODO: Remove all elements and reset to initial state
        // Hint: Create new Int32Array with capacity 8, reset _size and _capacity
        this._data = new Int32Array(8)
        this._size = 0
        this._capacity = 8
    }
    
    // Iterator support (already implemented for you)
    *[Symbol.iterator]() {
        for (let i = 0; i < this._size; i++) {
            yield this._data[i];
        }
    }
}