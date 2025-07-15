# Definitions:
    *Permutations: the different ways to organize items when the order matters. 
    
    *Combinations: the different possible groups of items when order does not matter.

    *Factorial: the produce of all positive integers less than or equal to n, denoted by n!
        Ex: 7! would be 7 x 6 x 5 x 4 x 3 x 2 x 1 = 5,040
        Ex: 3! would be 3 x 2 x 1 = 6
    
## Permutations
    Example Problem:
    You have seven plants that you want to place on a window sill. There are only seven plants and only seven spots and the order matters. How many possible arrangements/permutations of your seven plants are there?

||Spot #1| Spot #2| Spot #3| Spot #4| Spot #5| Spot #6| Spot #7 |
|---------|----------|----------|----------|---------|----------|----------|----------|
|Possible Plants for each spot| 7| 6| 5| 4| 3| 2| 1|

To calculate the permutations, you would take the above spots and multiple them out together. In the plant example, there are 5,040 possible plant arrangements.

    Example Problem: 
    You still have seven plants that you want to place on the window sill but you realized that only 5 fit comfortably.
    How many possible arrangements/permutations of your seven plants on the window sill now?

||Spot #1| Spot #2| Spot #3| Spot #4| Spot #5|
|---------|----------|----------|----------|---------|----------|
|Possible Plants for each spot| 7| 6| 5| 4| 3|

To calculate the permutations, you would tak the above spots and multiply them together. In the modified plant example there are only 2,500 permutations.

### What about permutations where the resource stays available?
    Example Problem:
    You are evaluating the security of your password requirements in a software you are developing. You are only able to use letters and all letters are available for each spot in a six letter word. Because all letters can be used again to spell this word, your resource availability stays consistent at 26 letters.

||Spot #1| Spot #2| Spot #3| Spot #4| Spot #5| Spot #6|
|---------|----------|----------|----------|---------|----------|----------|
|Possible Letters Available| 26| 26| 26| 26| 26| 26|

To calculate the permutations, you would take the above spots and multiply them together for a total of 208,915,776 permutations.
If you were to increase the security requirements from 6 letters to 7 letters, there are 80,331,810,176 password permutations available. 

## Combinations
    Example Problem:
    You are traveling to a plant expo and can only take four plants with you from the previous seven that you used in the permutations example. The order of these plants does not matter since the car ride has jumbled them slightly. How do you figure out how many many display combinations that you have since the order does not matter?

    To calculate the combinations for four plants out of the original seven, follow the below:
    1. Calculate the permutations for four plants
        7x6x5x4 = 840
*Note: This 840 includes some counts that are separated by the order of the plants only. Such as Norfolk Pine, Nerve Plant, Corn Plant, Birkin vs. Birkin Corn Plant, Nerve Plant, Norfolk Pine. Everything in the example is the same but the order is different. For permutations, the order matters.*
    
    2. Eliminate the redundant groups. Starting with highest value of what is available (in this case 4 plants) move down by 1 for each slot and then multiply them together. This gives you all the ways to arrange the four objects without the redundancies.
        4x3x2x1 = 24
    
    3. Calculate the combinations by taking the total permutations in step one and dividing it by the possible arrangements in step 2.
        840/24 = 35 combinations of four plants you can have.

*Note: In general the number of permutations is always larger than the number of combinations as order gives more way to distinguish each arrangement from one another.*
