// ✅ Prebuilt Stack class - intentionally compressed to a single line — all methods (push, pop, peek, isEmpty, size) are implemented correctly.
// 🔒 You can trust it works. Focus on how to use it, not how it’s built in this exercise.
class Stack {
  constructor() {
    this.items = []
  }
  push(item) {
    this.items.push(item)
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty - cannot pop");
    return this.items.pop()
  }

  peek() { 
    if (this.isEmpty()) throw new Error("Stack is empty - cannot peek"); 
    return this.items[this.items.length - 1] 
  }

  isEmpty() { 
    return this.items.length === 0 
  } 
  
  size() {
    return this.items.length
  }
}
/*
Problem: Using Stack Operations to Process Library Returns

Maya has provided you with a Stack class to help process returned books.
Your job is to USE the stack operations to solve real library problems!

Available Stack Operations:
- stack.push(item): Add a book to the top of the return cart
- stack.pop(): Remove and return the top book from the cart
- stack.peek(): Look at the top book without removing it
- stack.isEmpty(): Check if the cart is empty
- stack.size(): Get the number of books in the cart

Complete the functions below to help Alex process library returns!
*/

// The Stack class is (already implemented for you!)

// ⏱️ Alex's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

let cart = new Stack();
cart.push("The Hobbit");
cart.push("Dune");
cart.push("The Bookwoman of Trouble Creek");

console.log(cart.items)

function processAllReturns(returnCart) {
  // Process all books in the return cart (stack)
  // Return an array of processed books in the order they were processed
  const processedBooks = [];

  // TODO: Use stack operations to process all books
  // Hint: Keep popping books until the cart is empty

  while (!returnCart.isEmpty()) {
    processedBooks.push(returnCart.pop())
  }

  return processedBooks;
}

console.log(processAllReturns(cart))


// ⏱️ Alex's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

let cart2 = new Stack();
cart2.push("The Hobbit");
cart2.push("Dune");
cart2.push("The Bookwoman of Trouble Creek");
cart2.push("The Alchemist");
cart2.push("Your Last Rites");


function findSpecialBook(returnCart, targetTitle) {
  // Look through the return cart to see if a specific book is there
  // WITHOUT permanently removing books from the cart
  // Return true if found, false if not found

  const tempStack = new Stack();
  let found = false;

  // TODO: Use stack operations to search through books
  // Hint: You'll need to temporarily move books to search, then put them back

  while (!returnCart.isEmpty() && !found) {
    let top = returnCart.peek()
    
    if (top.toLowerCase() === targetTitle.toLowerCase()){
      found = true
    }else{
      tempStack.push(returnCart.pop())
    }
  }
  while (!tempStack.isEmpty()){
    returnCart.push(tempStack.pop())
  }
  return found
}

console.log(findSpecialBook(cart2, "Dune"))
console.log(cart2)

// ⏱️ Alex's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:


function processUntilTarget(returnCart, targetTitle) {
  // Process books from the cart until you find the target book
  // Return an array of all processed books (including the target)
  // If target not found, process all books
  
  const processedBooks = [];
  
  // TODO: Use stack operations to process books until target is found
  // Hint: Keep popping and checking each book

  while (!returnCart.isEmpty()){
    let item = returnCart.pop()
    processedBooks.push(item)

    if (item.toLowerCase() === targetTitle.toLowerCase()){
      break
    }
  }
  
  return processedBooks;
}

console.log(processUntilTarget(cart2,"Dune"))