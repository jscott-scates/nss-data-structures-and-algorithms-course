## Definitions:
    *Data Structure: a specialized format for organizing, processing, retrieving, and storing data.

    *Algorithms: a step-by-step process of set of rules/instructions designed to perform a specific task or solve a specific problem.

    *Primitive Data Structure: a basic data type that is fundamental and built into a programming languages such as integers, characters, booleans, etc.

    *Linear Data Structure: a way of organizing data where elements are arranged sequentially, forming a single continuous sequence. 

    *Non-Linear Data Structure: a data structure in which data elements are not arranged sequentially. 


## Why Data Structures Matter
* Act as a structure that efficiently organizes and stores the data.
* Allows data to be used in operations or algorithms in efficient ways. 
* Aids with large data management and scalability 
* Essential in implementing efficient algorithms, and can dictate the path you take to access the data.
* Directly impact the overall performance and scalability of applications.

## Types of Data Structures

### Primitive Data Structures
* Integers
* Floating-point Numbers
* Characters
* Boolean Values

*Note: Floating-point Numbers are used to store both large and small numbers that contain a decimal point. It is a way for computers to represent these numbers without needing to store every single digit (like in pi, which technically goes on forever). Instead, it allows for storing just enough digits and the position of the decimal point to give an approximate value improving calculation speed and saving memory*

### Linear Data Structures
* Arrays
* Linked Lists 
* Stacks (such as LIFO)
* Queues (such as FIFO)

*Note: Linked Lists are where elements called "nodes", are connected sequentially. Each node contains the relevant data and a pointer (or link) to the next node in the list.
Unlike an array, linked lists do not store elements beside each other with no gaps which allows for it to be dynamic in size and efficient addition and removal from the list.
The trade off is that the random accessing of any item by index is slower as it must follow the thread from start to the item requested.*

### Non-Linear Data Structures
* Trees
* Graphs
* Hash Tables 
* Heaps

*Note: Hash Tables are data structures that store key-value pairs. It uses a function called a hash function to quickly find the place (bucket or index) where each value is stored.*

*Note: Heaps are binary trees used to keep track of the biggest or smallest number quickly. A Max Heap always has a parent number that is bigger than its children while a Min Heap the parent number is always smaller than it's children.*

## Choosing the Right Data Structure
Several factors dictate the data structure you should use:
* The type of operations performed on the data (such as insertion, deletion, search, etc.)
* Frequency of the operations completed
* Memory constraints
* Performance requirements
* The nature of the data being stored
