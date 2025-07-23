## Definitions:
    *Big O Notation: a mathematical function used to calculate how much memory or how long an algorithm runs for based on the inputs.
    *Time Complexity: the amount of time an algorithm takes to complete as a function of the length of the input used.
    *Space Complexity: a measure of the amount of memory an algorithm uses as a function of the length of the input.

*Note: In Big O notation, polynomials are denoted as O(n<sup>c</sup>) where **n** is the input size and **c, k or other letters** is some number.*

## What is Big O Notation Used For?
Big O Notation is used to analyze how much space an algorithm or how long the algorithm runs based on the input and how that variable increases. It can be used comparatively with other algorithmic solutions to evaluate which algorithm will work better with the resource limitations. 

The speed and memory usage of a program are definitive measurements that can be used to improve code whereas code readability can be subjective. It gives us a tool to compare algorithms as apples to apples rather than apples to oranges. 

## Big O Notation Examples Using Code Snippets

### Time Complexity Evaluations
*What is Time Complexity?*

**Time complexity is the amount of time an algorithm takes to complete as a function of the length of the input used.** 

When we say time, we are not talking about the run time on individual machines as timers are not precise or reliable enough to compare across multiple computers. Instead, we are counting the milliseconds it takes to run an algorithm by **counting the number of operations** the computer has to run. 

*What is big-o evaluating?*
Big O Notation is evaluating the **core portion** of the function, in other words the portion of the function that is executed again and again as the for loop is executed based on a(n) input(s).


```
const data = ['A','B','C']

for (let i=0; i < data.length; i++ ){
    console.log(data[i])
}
```
In the example above, the **core portion** of the code is the **console.log(data[i])**.
This is because the console.log is the only portion of the code that is happening with each finished loop. 

When evaluating Big-O Notation, *n* is normally used to represent the number of inputs for the algorithm. In the above example, *n=3* but n could equal 3,10,30,500, etc. 

**As there is only the n inputs that determine the growth of the equation, Big O Notation for the above example is:**

**O(n)**

**Which represents *linear growth* when plotted on a graph.**

---

```
const data = ['A','B','C']
const data2 = [1, 2, 3, 4, 5]

for (let j = 0; j < data2.length; j++){
    console.log(data2[j])
}

for (let i=0; i < data.length; i++ ){
    console.log(data[i])
}
```
As the above example loops through the data2 array and it's full contents and then loops through the data array and it's full contents we have **two core portions** being executed as each prints a console.log with it's respective data for each loop completed. 

As there are two core portions:
    *n* represents the inputs for data
    *a* represents the inputs for data2

**As these are two separate loops, we will add the amount of time it takes to complete both loop one and loop two.**

**O(n+a)**

---

Although the below example is for a nested loop, please note that nested loops are known for creating poor quality programs that poorly manage the use of resources or time.

```
const data = ['A','B','C']
const data2 = [1, 2, 3, 4, 5]

for (let j = 0; j < data2.length; j++){
    for (let i=0; i < data.length; i++ ){
    console.log(data[i] + data2[j])
}
}
```
For the above example, we have a nested loop. *n* represents that outer loop while *a* represents the inner loop. 

**Although this example has *one core portion* we will need to multiple n by a as for each outer loop there is an inner loop that is occurring.**

**O(n*a)**

---

```
const data = ['A','B','C']

for (let j = 0; j < data.length; j++){
    for (let i=0; i < data.length; i++ ){
    console.log(data[i] + data[j])
}
}
```
Although the above is a simplified nested loop, the outcome is still a poorly performing algorithm due to it's exponential growth.

**O(n<sup>2</sup>)**

**Which represents *quadratic growth* when plotted on a graph.**

---
```
const data = ['A','B','C']

for (let j = 0; j < data.length; j++){
    for (let i=0; i < data.length; i++ ){
    console.log(data[i] + data[j])
    console.log(data[i] + data[j])
    console.log(data[i] + data[j])
    console.log(data[i] + data[j])
    }
}
```
Reviewing the above example, we can see that the algorithm has **four core portions**. With that we may think that the Big O Notation for the above example should be:
O(4n<sup>2</sup>).

**We do not use the leading constants or additional numerical constants as they are not needed in determining the overall general growth of the algorithm. The correct notation would be:**

**O(n<sup>2</sup>)**

---

```
const data = ['A','B','C']

for (let j = 0; j < data.length; j++){
    for (let i=0; i < data.length; i++ ){
    console.log(data[i] + data[j])
    }
}

for (let i=0; i < data.length; i++) {
    console.log(data[i] + data[j])
}

```
Again reviewing the above code, the Big O Notation would appear to be O(n<sup>2</sup> + n), you would remove the +n from the notation as the 
Although the big o would appear to be O(n^2 + n) would would remove the *+ n* due to the degree in which n<sup>2</sup> grows at an exponential rate. Similar to polynomials, we care only for the largest degree in which big o grows. 

**O(n<sup>2</sup>)**

### Shortcuts For Time Complexity

```
double sum = (8*4)/3+9
```
As all of the above are constants, the big o notation is O(1). Even if we have multiple lines with O(1), the overall big o is still O(1).

```
double num1 = 8*4
double num2 = num1 /3
double sum = num2+9
```
The above yeilds the same results as the first example in this section. Each code snippet still has a big o notation of O(1) as variable assignments are still constant.

```
int[] numArray = new int[]{4,5,6,7};
int num1 = numArray[0]
```
**Accessing elements in an array by index or object by key are also constant.** This is because we are telling it where to look for the information via the index.

```
for (int = 0; i < numArray.length; i++){
    System.out.println(numArray[i]);
}
```
Looking at loops we see that 


### Space Complexity Evaluations

*What is Space Complexity?*

**Space Complexity is a measure of the amount of memory an algorithm uses as a function of the length of the input.**

Instead of counting the number of operations a computer is running, we **count the number of variables** to calculate space complexity.

It's about Peak Memory Usage not Total Usage, when looking at space complexity we want to know the maximum amount of additional memory an algorithm uses at any single point during its execution, not the total memory used over time. 
    * This means that if an algorithm creates a temporary array of size n once, the space complexity is O(n) even if it happens in phases or multiple times
    * Memory is never used for more than one temporary array at the same time.
    * It excludes the inputs and outputs. For example, if you sort an array in place, without creating a new variable the big o notation is 0(1) or constant space since you are not using any additional memory. 

Generally, we are more concerned about the time complexities than we are about the space complexities when dealing with Big O Notations. 

```
const data = ['A','B','C']

for (let i=0; i < data.length; i++ ){
    console.log(data[i])
}
```
For the memory or space used in the above example, although the input size may increase we are not creating or updating any resouce.

**O(1)**

**Which represents *constant growth* when plotted on a graph. This is also the ideal runtime for an algorithm**

---
```
const data = ['A','B','C']
const out = []

for (let i=0; i < data.length; i++ ){
    out[i]=data[i]
}

```
As this algorithm runs, it is updating the "out" array with a copy of the information stored in the data array. Essentially matching the data array one for one.

**O(n)**

---

```
const data = ['A','B','C']
const out = []

for (let i=0; i < data.length; i++ ){
    out[i] = []
    for (let j = 0; j < data.length; j++){
        out[i][j]=data[i]
    }
}
```
As the algorithm runs for the above example we have three arrays being output. This will give us

**O(n<sup>2</sup>)**

## How to Determine the Big O
1. Identify the code you want to analyze.
* Although it could be the whole algorithm, generally you are looking at specific methods or parts of methods. You can also look specifically at areas that are taking a long time to run. 
2. Determine what *n* is.
* Think about what the input data is for our code. It could be a variable, it could be an array or list, etc.
3. Count the steps in a typical run.
* Steps are not well defined and are intentionally vague. To determine the steps in an algorithm, you only need to keep the most significant par in the expression.
    * Example: O(n+3) is reduced to O(n)
    * Example: O(3n) is reduced to O(n)
    

