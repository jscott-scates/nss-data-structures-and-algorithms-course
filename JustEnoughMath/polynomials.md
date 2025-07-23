**In software engineering the most common relationship we describe is the relationship between an input size and the number of steps it takes to complete a specified task.**

# Definitions:
    * Polynomial: a mathematical expression that contains a sequence of numbers variables, and operations (such as +,-,*). They can contain one or more terms which can have operators or be a value such as "5"

    * Expression: a sequence of numbers, variables, and operations that can be evaluated to get a single result. 

    * Coefficient: The number that starts a term (such as 2x) or any stand alone number 
        Ex: the 2 in 2x

    * Term: Can be a single number, variable, or a combination of numbers and variables joined by multiplication or division. 
        Ex: 2x
    
    *Exponents: a number written over another one (superscript) indicating how many times the second number is multiplied by itself.
        Ex: 2^3is equal to 2*2*2 (which equals 8)
            When you see 2x, the exponent is an assumed 1
    
    *Degree: the size of the exponent operating on a term, in a polynomial, the degree refers to the largest exponent of all terms. 

 

## Why are polynomials useful to software developers?

More than one algorithm can be used to solve a problem and as a software developer you will need to evaluate the algorithms and determine which is better suited taking into account the time and memory needed when implementing the algorithms. 

**Software Developers will use polynomials to assess and determine which algorithms meet the criteria for time to implement and memory needed**

---

Polynomials are used to represent the values in an input for evaluation. For example:
> 2x-5 
> where x is the input for things such as time, memory, etc. that is being evaluated.

---

Understanding the growth rate of a problem is essential. This is what allows you to evaluate the algorithmic solutions presented and assess if there is sufficient time and memory for the suggested implementation. 

Being able to assess the fastest and most memory efficient algorithms at a glance improves your efficiency in writing effective code.

    Example:
    A program displays the name, address, and userId for each user in an array. You need to create a polynomial that accounts for the number of steps taken for each user in an array.

    steps = 3u or in laymen there are 3 steps taken for each user.

    For an Array of 5 Users:
    s = 3*5 or 15 steps

    For an Array of 100 Users:
    s = 3*100 or 300 steps

## Degrees of Polynomials
The degrees of a polynomial determine both the name and type.
| Degree | Name | Example |
|----------|----------|----------|
|0| Constant|x or 5|
|1| Linear| x+2|
|2| Quadratic| x<sup>2</sup> + 3x +1|
|3| Cubic| x<sup>3</sup> - 2x +4|

**The higher the degree the faster the growth.** 
Keep in mind that if there are multiple degrees in a polynomial you will use only the largest. For an example please reference the Degree 2 example in the table above.

## Practice Problems

1. You are helping a friend evaluate a room cleaning process to figure out how long it will take for them to complete a room. Your friend tells you the following:
    - It takes 20 minutes to unpack and pack all cleaning supplies.
    - It takes 10 minutes to clean 1 sq ft

        Time = 10x<sup>2</sup> + 20

2. How many squares exist on a chess board?
    Using what we know about squares and that the length and width is the same

    squares = x<sup>2</sup>

    Degrees= 2 or quadratic  


