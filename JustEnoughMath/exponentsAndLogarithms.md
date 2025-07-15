# Definitions:
    * Exponents: comprised of a base number (the larger number) and the exponent (the superscripted numbers), exponents act as repeated multiplication.

    *Expression: a sequence of numbers, symbols, and operations that can be evaluated to get a single result. 

    *Logarithms: work backwards from an answer to figure out how many times a value must be multiplied to get the final answer.  
        Ex: log<sub>2</sub>8 = 3 while 2<sup>3</sup> = 8
    
    *Growth Rate: how many steps it takes to run against a certain amount of input.
        *Exponential Growth Rate: when the rate grows via exponent.
            Ex: 4<sup>2</sup>
        
        *Logarithmic Growth Rate: when the rate grows via logarithm.
            Ex: log<sub>2</sub>4
    
    *Binary Search: highly efficient method for finding a specific value within a sorted list or array. It works by repeatedly dividing the search interval in half.

    *Merge Sort: a common comparison-based sorting algorithm that uses the divide and conquer paradigm by splitting the list or array in half repeatedly until each item is in it's own sub-list and then compared to for sorting. 

## 2<sup>n</sup>
Describes algorithms that take exponentially longer as input size increases.

You may not always be given an exponent value, when you see an "n" think of it as being similar to the function below:

```
    int addTen(int n){
        n=n+10;
        return;
    }
```
Any value can be substituted into n for the equation. That is similar to our n<sup>th</sup> power. 

## Logarithms
Although logarithms sounds similar to algorithms they are not equal to one another.

They grow much slower than linear or exponential algorithms. 

*Note: in ATA and CS materials log n is log<sub>2</sub>n unless otherwise stated*


## Example Growth Rates
When evaluating algorithms we often describe them in terms of how many steps they take to run against a certain amount of input.

Example: n = number of inputs into a program.
| |Algorithm A| Algorithm B|
|----------|----------|----------|
|Equation| log<sub>2</sub>n| 2<sup>n</sup>|
|n = 2 | 1 step | 4 steps|
|n = 4 | 2 steps | 16 steps|
|n = 8 | 3 steps | 256 steps |

Exponential growth should be avoided as it takes longer to run. 

## Binary Search
Binary Search algorithms work by dividing a sorted list or array in half and then evaluating the value. If the value being searched for is less than the value reviewed, it continues its search in the left half otherwise it continues into the right half. This process repeats until it finds the search term/value. 

*Binary Search has a smaller growth rate than reading through the entire directory item by item. This means that it uses less memory or takes less time than the alternative of reading each item in the list or array.*

## Merge Sort
Merge Sort algorithms are common for comparison-based sorting that uses the divide and conquer paradigm. It works by recursively breaking down a list into smaller sub-lists until each sub-lists contains only one element. These single element sub-lists are repeatedly merged back together in a sorted manner until the entire list is sorted. 

    Example: 
    n = number of employees in the directory. 
    n = 4

    Sofia, Alejandro, Jane, Richard
    1. Split the above list in half and then  continue to split in half until each item is it's own sublist.

        Sofia, Alejandro | Jane, Richard
        
        Sofia | Alejandro | Jane | Richard
    
    2. Compare two names at a time and swap the names that are out of order.
        Alejandro, Sofia | Jane, Richard

        Alejandro (Sofia to Jane), Jane (Sofia to Richard), Richard, Sofia
    
Merge sort is logarithmic in nature as it increases in steps only slightly based on the increase in n. 

    