## Two Pointer Technique
**An algorithmic approach that uses two pointers (one fast, one slow) to traverse a data structure like an array or linked list simultaneously.**

- Used for the comparison of two elements while referencing two at a time which decreases the number of operations needed.
- A pointer is a reference to an object, in many cases a variable referencing an index or node, or other kind of object.
    - Pointer 1 on an array may start on index 0 while pointer 2 may be the last element in an array. It will loop through until it meets in the middle. 

## When do we use the Two Pointer Technique?
- When you have to analyze each element of the collection (in an array or list).
- Iterating through each element individually rather than in a pairwise fashion increases the time and space complexity of the approach making it inefficient. 

## Two Sum Problem Example
Assumes you have a sorted array, but you need to find the pair of elements arr[p] + arr[q] equals a specific number. 

```
arr = [1,2,3,4,5]
//arr[p] + arr[q] = 6

function two_sum(arr,target){
    pointer_one = 0
    pointer_two = arr.length-1pointer_one = 0

    while pointer_one < pointer_two
    
    if (sum === targetValue){
        return true
    }
    if else (sum < targetValue){
        pointer_one += 1
    }
    else {
        pointer_two -= 1
    }
    return false
}
```
## Slow and Fast Pointers Example
Used for linked lists, for this example we want to know if there is a cycle at any point in the linked list.

Example Cycle:
```
1 --> 2 --> 3 --> 4
            ^     |
            |     |
            <- - -
```
The idea is to move the fast pointer twice as fast as the slow pointer as the distance increases by one between each of them.

If at some point the two pointers meet, the cycle has been found. If they never meet no cycle is present. 

This gives a time complexity of O(n) or linear time complexity. 

## Course Example:
### Two Sum Problem using Pointers
```
// Eleanor's chronologically sorted book collection
const bookYears = [1850, 1923, 1945, 1967, 1978, 1989, 1995, 2001, 2010, 2015];
const targetYear = 2000;

function findBookPairForYear(books, target) {
    let leftBookmark = 0;                    // Start with oldest book
    let rightBookmark = books.length - 1;    // Start with newest book
    
    console.log("Eleanor begins her search...");
    
    while (leftBookmark < rightBookmark) {
        const leftYear = books[leftBookmark];
        const rightYear = books[rightBookmark];
        const combinedYear = leftYear + rightYear;
        
        console.log(`Checking: ${leftYear} + ${rightYear} = ${combinedYear}`);
        
        if (combinedYear === target) {
            return {
                leftBook: { position: leftBookmark, year: leftYear },
                rightBook: { position: rightBookmark, year: rightYear },
                message: `Perfect! Books from ${leftYear} and ${rightYear} sum to ${target}`
            };
        } else if (combinedYear < target) {
            // Sum too small, need a newer book on the left
            leftBookmark++;
            console.log("Sum too small, moving left bookmark forward...");
        } else {
            // Sum too large, need an older book on the right
            rightBookmark--;
            console.log("Sum too large, moving right bookmark backward...");
        }
    }
    
    return { message: "No pair found that sums to the target year" };
}

// Eleanor finds her book pair
const result = findBookPairForYear(bookYears, targetYear);
console.log(result.message);
```
**By using converging pointers, the time complexity changes from O(n<sup>2</sup>) to O(n). This makes it an excellent tool for:
- Finding pairs with target sums in sorted arrays
- Detecting palindromes
- Reversing arrays in-place
- Partitioning arrays around pivot points

### Fast and Slow Pair Example

```
// Eleanor's various reading lists of different lengths
const shortList = ["Book A", "Book B", "Book C"];
const mediumList = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"];
const longList = [
    "The Great Gatsby", "To Kill a Mockingbird", "1984", "Pride and Prejudice",
    "The Catcher in the Rye", "Lord of the Flies", "Jane Eyre", "Wuthering Heights",
    "The Hobbit"
];

function findMiddleBook(bookList) {
    if (bookList.length === 0) {
        return { message: "Empty list has no middle!" };
    }
    
    let slowPointer = 0;    // Tortoise: moves 1 step at a time
    let fastPointer = 0;    // Hare: moves 2 steps at a time
    
    console.log(`Finding middle of list with ${bookList.length} books...`);
    
    // Move pointers until fast pointer reaches or exceeds the end
    while (fastPointer + 1 < bookList.length) {
        slowPointer++;      // Move slow pointer 1 step
        fastPointer += 2;   // Move fast pointer 2 steps
        
        console.log(`  Slow at position ${slowPointer}: "${bookList[slowPointer]}"`);
        console.log(`  Fast at position ${fastPointer}: "${bookList[Math.min(fastPointer, bookList.length - 1)]}"`);
    }
    
    return {
        middleBook: bookList[slowPointer],
        position: slowPointer,
        totalBooks: bookList.length,
        message: `Middle book is "${bookList[slowPointer]}" at position ${slowPointer}`
    };
}

// Eleanor tests her technique on different sized lists
console.log("=== Eleanor's Middle-Finding Technique ===");
[shortList, mediumList, longList].forEach((list, index) => {
    console.log(`\nTesting list ${index + 1}:`);
    const result = findMiddleBook(list);
    console.log(result.message);
});
```

### Two-Pointer Cleanup Example
Example of removing duplicate entries from the array or list. One pointer would read through the catalog and the other would write only unique book titles.
```
// Eleanor's sorted catalog with duplicate entries
const catalogWithDuplicates = [
    "1984", "1984", "Animal Farm", "Brave New World", "Brave New World", "Brave New World",
    "Dune", "Foundation", "Foundation", "The Great Gatsby", "The Great Gatsby", "The Hobbit"
];

function removeDuplicatesFromSortedCatalog(sortedBooks) {
    if (sortedBooks.length === 0) {
        return { cleanCatalog: [], duplicatesRemoved: 0 };
    }
    
    console.log("Eleanor begins duplicate removal...");
    console.log("Original catalog:", sortedBooks);
    
    let writePointer = 0;  // Points to where next unique book should go
    let duplicatesRemoved = 0;
    
    // Start reading from the second book (index 1)
    for (let readPointer = 1; readPointer < sortedBooks.length; readPointer++) {
        const currentBook = sortedBooks[readPointer];
        const lastUniqueBook = sortedBooks[writePointer];
        
        console.log(`  Comparing "${currentBook}" with last unique "${lastUniqueBook}"`);
        
        if (currentBook !== lastUniqueBook) {
            // Found a new unique book - move it to the write position
            writePointer++;
            sortedBooks[writePointer] = currentBook;
            console.log(`    ✓ Keeping unique book: "${currentBook}" at position ${writePointer}`);
        } else {
            // Found a duplicate - skip it
            duplicatesRemoved++;
            console.log(`    ✗ Removing duplicate: "${currentBook}"`);
        }
    }
    
    // Create clean catalog with only unique books
    const cleanCatalog = sortedBooks.slice(0, writePointer + 1);
    
    return {
        cleanCatalog: cleanCatalog,
        originalCount: sortedBooks.length,
        uniqueCount: cleanCatalog.length,
        duplicatesRemoved: duplicatesRemoved,
        message: `Removed ${duplicatesRemoved} duplicates. Clean catalog has ${cleanCatalog.length} unique books.`
    };
}

// Eleanor cleans up her catalog
const cleanupResult = removeDuplicatesFromSortedCatalog([...catalogWithDuplicates]);
console.log("\n" + cleanupResult.message);
console.log("Clean catalog:", cleanupResult.cleanCatalog);
```

### Finding Duplicates in an Unsorted Array
```
// Eleanor's unsorted collection where book IDs might repeat
// (Using numbers 1-6 to represent book IDs, with one guaranteed duplicate)
const bookIds = [3, 1, 4, 2, 5, 2, 6]; // Book ID 2 appears twice

function findDuplicateBookId(bookIds) {
    // This uses Floyd's cycle detection on the array treated as a function
    // where bookIds[i] points to the next position
    console.log("Eleanor searches for duplicate book ID...");
    console.log("Book IDs:", bookIds);
    
    let slowPointer = bookIds[0];
    let fastPointer = bookIds[0];
    
    // Phase 1: Find intersection point in the "cycle"
    do {
        slowPointer = bookIds[slowPointer];           // Move 1 step
        fastPointer = bookIds[bookIds[fastPointer]];  // Move 2 steps
        console.log(`  Slow pointer at ID ${slowPointer}, Fast pointer at ID ${fastPointer}`);
    } while (slowPointer !== fastPointer);
    
    // Phase 2: Find the start of the cycle (the duplicate)
    let finder = bookIds[0];
    while (finder !== slowPointer) {
        finder = bookIds[finder];
        slowPointer = bookIds[slowPointer];
    }
    
    return {
        duplicateId: finder,
        message: `Found duplicate book ID: ${finder}`
    };
}

// Eleanor finds the duplicate
const duplicateResult = findDuplicateBookId(bookIds);
console.log("\n" + duplicateResult.message);
```
**Fast and Slow Pointers techniques excel at:
- Finding the middle elements without counting (O(n) time, O(1) space)
- Removing duplicates from sorted arrays (O(n) time, O(1) space)
- Detecting duplicates in special array configurations
- Partitioning arrays based on certain conditions

### Sliding Window
Transforms O(n<sup>2</sup> nested loops into O(n)) for the following:
- Finding the max/min sum subarrays of fixed size
- Longest substring problems with constraints
- Finding shortest subarrays meeting criteria
- Analyzing patterns in sequential data

#### Adjustable Window
```
// Eleanor's book popularity scores for the fiction section
const fictionPopularity = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9];
const bookTitles = [
    "The Great Gatsby", "Moby Dick", "To Kill a Mockingbird", "1984", 
    "Pride and Prejudice", "The Catcher in the Rye", "Lord of the Flies",
    "Jane Eyre", "Wuthering Heights", "The Hobbit", "Dune", 
    "Foundation", "Neuromancer", "Brave New World", "Fahrenheit 451"
];

function findMostPopularBookSequence(popularity, titles, windowSize) {
    if (windowSize > popularity.length) {
        return { message: "Window size larger than catalog!" };
    }
    
    let windowStart = 0;
    let windowSum = 0;
    let maxSum = 0;
    let bestWindowStart = 0;
    
    console.log(`Eleanor analyzes sequences of ${windowSize} books...`);
    
    // Calculate sum of first window
    for (let i = 0; i < windowSize; i++) {
        windowSum += popularity[i];
    }
    maxSum = windowSum;
    
    console.log(`First window (${windowStart} to ${windowStart + windowSize - 1}): sum = ${windowSum}`);
    
    // Slide the window across the catalog
    for (let windowEnd = windowSize; windowEnd < popularity.length; windowEnd++) {
        // Slide window: remove leftmost element, add rightmost element
        windowSum = windowSum - popularity[windowStart] + popularity[windowEnd];
        windowStart++;
        
        console.log(`Window (${windowStart} to ${windowEnd}): sum = ${windowSum}`);
        
        // Update maximum if current window is better
        if (windowSum > maxSum) {
            maxSum = windowSum;
            bestWindowStart = windowStart;
        }
    }
    
    // Get the titles of the most popular sequence
    const bestSequence = titles.slice(bestWindowStart, bestWindowStart + windowSize);
    
    return {
        maxPopularity: maxSum,
        startPosition: bestWindowStart,
        books: bestSequence,
        message: `Most popular sequence of ${windowSize} books has total popularity ${maxSum}`
    };
}
```

#### Dynamic Window
```
function findShortestSequenceAboveThreshold(popularity, titles, threshold) {
    let windowStart = 0;
    let windowSum = 0;
    let minLength = Infinity;
    let bestStart = 0;
    let bestLength = 0;
    
    console.log(`Finding shortest sequence with popularity > ${threshold}...`);
    
    for (let windowEnd = 0; windowEnd < popularity.length; windowEnd++) {
        // Expand window by including current book
        windowSum += popularity[windowEnd];
        
        // Contract window while sum is still above threshold
        while (windowSum >= threshold && windowStart <= windowEnd) {
            const currentLength = windowEnd - windowStart + 1;
            console.log(`Window [${windowStart}, ${windowEnd}]: sum = ${windowSum}, length = ${currentLength}`);
            
            if (currentLength < minLength) {
                minLength = currentLength;
                bestStart = windowStart;
                bestLength = currentLength;
            }
            
            // Try to shrink window from left
            windowSum -= popularity[windowStart];
            windowStart++;
        }
    }
    
    if (minLength === Infinity) {
        return { message: `No sequence found with popularity above ${threshold}` };
    }
    
    const bestSequence = titles.slice(bestStart, bestStart + bestLength);
    
    return {
        minLength: minLength,
        startPosition: bestStart,
        books: bestSequence,
        totalPopularity: popularity.slice(bestStart, bestStart + bestLength).reduce((a, b) => a + b, 0),
        message: `Shortest sequence above threshold: ${minLength} books`
    };
}
```

#### Palindrome Mystery
```
// Eleanor's collection of potentially palindromic book titles
const mysteriousTitles = [
    "A Santa at NASA",
    "Madam",
    "Was it a car or a cat I saw",
    "The Great Gatsby",
    "A man a plan a canal Panama",
    "Racecar",
    "Hello World",
    "Never odd or even"
];

function checkIfPalindrome(title) {
    // Clean the title: remove spaces and convert to lowercase
    const cleanTitle = title.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let leftBookmark = 0;
    let rightBookmark = cleanTitle.length - 1;
    
    console.log(`Checking "${title}" (cleaned: "${cleanTitle}")`);
    
    while (leftBookmark < rightBookmark) {
        const leftChar = cleanTitle[leftBookmark];
        const rightChar = cleanTitle[rightBookmark];
        
        console.log(`  Comparing '${leftChar}' at position ${leftBookmark} with '${rightChar}' at position ${rightBookmark}`);
        
        if (leftChar !== rightChar) {
            return {
                isPalindrome: false,
                title: title,
                message: `"${title}" is NOT a palindrome - '${leftChar}' ≠ '${rightChar}'`
            };
        }
        
        leftBookmark++;
        rightBookmark--;
    }
    
    return {
        isPalindrome: true,
        title: title,
        message: `"${title}" IS a palindrome! ✓`
    };
}

// Eleanor checks each mysterious title
console.log("Eleanor's Palindrome Investigation:");
console.log("=====================================");

const palindromeResults = mysteriousTitles.map(title => {
    const result = checkIfPalindrome(title);
    console.log(result.message);
    return result;
});

// Summary of findings
const truePalindromes = palindromeResults.filter(result => result.isPalindrome);
console.log(`\nEleanor found ${truePalindromes.length} true palindromes!`);
truePalindromes.forEach(p => console.log(`  - ${p.title}`));
```

#### The Grand Reorganization - Advanced 
```
// Eleanor's two sorted collections to merge
const classicLiterature = [
    "Animal Farm", "Brave New World", "Great Expectations", 
    "Jane Eyre", "Pride and Prejudice"
];

const modernFiction = [
    "Dune", "Foundation", "Neuromancer", 
    "The Handmaid's Tale", "The Road"
];

function mergeSortedCollections(collection1, collection2) {
    const mergedCollection = [];
    let pointer1 = 0;  // Pointer for first collection
    let pointer2 = 0;  // Pointer for second collection
    
    console.log("Eleanor begins merging two sorted collections...");
    
    // Compare and merge while both collections have books remaining
    while (pointer1 < collection1.length && pointer2 < collection2.length) {
        const book1 = collection1[pointer1];
        const book2 = collection2[pointer2];
        
        console.log(`Comparing "${book1}" vs "${book2}"`);
        
        if (book1.localeCompare(book2) <= 0) {
            mergedCollection.push(book1);
            console.log(`  Added "${book1}" from classics`);
            pointer1++;
        } else {
            mergedCollection.push(book2);
            console.log(`  Added "${book2}" from modern fiction`);
            pointer2++;
        }
    }
    
    // Add remaining books from whichever collection isn't finished
    while (pointer1 < collection1.length) {
        mergedCollection.push(collection1[pointer1]);
        console.log(`  Added remaining classic: "${collection1[pointer1]}"`);
        pointer1++;
    }
    
    while (pointer2 < collection2.length) {
        mergedCollection.push(collection2[pointer2]);
        console.log(`  Added remaining modern: "${collection2[pointer2]}"`);
        pointer2++;
    }
    
    return {
        mergedBooks: mergedCollection,
        totalBooks: mergedCollection.length,
        message: `Successfully merged ${collection1.length + collection2.length} books in alphabetical order`
    };
}

// Eleanor merges her collections
const mergeResult = mergeSortedCollections(classicLiterature, modernFiction);
console.log(mergeResult.message);
console.log("Final merged collection:", mergeResult.mergedBooks);
```

#### Removing Duplicates from Sorted Collection
```
function removeDuplicatesFromSortedCollection(sortedBooks) {
    if (sortedBooks.length === 0) return { books: [], removed: 0 };
    
    let writePointer = 0;  // Points to position for next unique book
    let duplicatesRemoved = 0;
    
    console.log("Eleanor removes duplicates from sorted collection...");
    console.log("Original collection:", sortedBooks);
    
    // Read pointer starts from second book
    for (let readPointer = 1; readPointer < sortedBooks.length; readPointer++) {
        const currentBook = sortedBooks[readPointer];
        const lastUniqueBook = sortedBooks[writePointer];
        
        if (currentBook !== lastUniqueBook) {
            // Found a new unique book
            writePointer++;
            sortedBooks[writePointer] = currentBook;
            console.log(`  Keeping unique book: "${currentBook}"`);
        } else {
            // Found a duplicate
            duplicatesRemoved++;
            console.log(`  Removing duplicate: "${currentBook}"`);
        }
    }
    
    // Trim the array to remove the duplicates at the end
    const uniqueBooks = sortedBooks.slice(0, writePointer + 1);
    
    return {
        books: uniqueBooks,
        originalCount: sortedBooks.length,
        uniqueCount: uniqueBooks.length,
        removed: duplicatesRemoved,
        message: `Removed ${duplicatesRemoved} duplicates, ${uniqueBooks.length} unique books remain`
    };
}

// Eleanor's collection with duplicates
const booksWithDuplicates = [
    "1984", "1984", "Animal Farm", "Brave New World", "Brave New World", 
    "Dune", "Dune", "Foundation", "The Hobbit", "The Hobbit", "The Hobbit"
];

const deduplicationResult = removeDuplicatesFromSortedCollection([...booksWithDuplicates]);
console.log(deduplicationResult.message);
console.log("Unique collection:", deduplicationResult.books);
```