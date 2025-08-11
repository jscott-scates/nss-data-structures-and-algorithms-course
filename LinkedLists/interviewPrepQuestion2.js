/*
Problem: Find Middle Node of Linked List

Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Use the two-pointer technique (tortoise and hare) to solve this in one pass.

Example 1:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: Node with value 3 (middle node)

Example 2:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: Node with value 4 (second middle node)

Node structure:
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you find the node at 1/3 position?
*/

class ListNode {
    constructor(val, next) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
  }

// create new list elements, only use val field, next is assigned in the next step
let element1 = new ListNode(1);
let element2 = new ListNode(2);
let element3 = new ListNode(3); //expected result for the middle
let element4 = new ListNode(4);
let element5 = new ListNode(5);

//assign .next to the elements
element1.next = element2;
element2.next = element3;
element3.next = element4;
element4.next = element5;
//nothing is assigned to element5.next as this is a singularly linked list and element5 is the tail, we want the .next to return null


function findMiddleNode(head) {
    // Approach: Use two pointers (tortoise and hare)
    // Slow pointer moves 1 step at a time
    // Fast pointer moves 2 steps at a time
    // When fast reaches the end, slow will be at the middle

    if(head === null && head.next === null){
      return "This list is empty."
    }

    let tortoise = head //both tortoise and hare (slow and fast) start at the head
    let hare = head

    while (hare !== null && hare.next !== null){
      tortoise = tortoise.next
      hare = hare.next.next
    }

    return tortoise
}

console.log(findMiddleNode(element1))