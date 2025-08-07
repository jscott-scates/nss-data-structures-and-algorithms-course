
// ==============================
// Exercise 1: Help Eleanor Find Book Pairs
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Find two books whose publication years sum to a target year

function findBookPairForTargetYear(bookYears, targetYear) {
    // Use converging pointers to find a pair that sums to targetYear
    let leftBook = 0; //start with the oldest book or first in the array
    let rightBook = bookYears.length - 1 //start with the newest book or the last item in the array

    while (leftBook < rightBook){
        const leftYear = bookYears[leftBook]
        const rightYear = bookYears[rightBook]
        const combinedYear =  leftYear + rightYear

        // Return an object with the pair information or null if not found
        if (combinedYear === targetYear){
            return `${leftYear}, ${rightYear}`
        }
        else if (combinedYear < targetYear){
                //sum is too small, need a newer left book
                leftBook++
                console.log("Sum too small, moving to next book to the right.")
        }
        else {
                //sum is too large need a newer right book
                rightBook--
                console.log("Sum too large, moving to the next book to the left.")
        }
    }
    return "No pair found that sums to the target year"
} 




const libraryBooks = [1920, 1945, 1960, 1975, 1980, 1995, 2000, 2010];
console.log("Finding pair for 1995:", findBookPairForTargetYear(libraryBooks, 1995));
console.log("Finding pair for 2020:", findBookPairForTargetYear(libraryBooks, 2020));

// ==============================
// Exercise 2: Help Eleanor Detect Patterns
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Find the middle book in a reading list and detect if a list has cycles

function findMiddleBookInList(bookList) {
    // Use fast and slow pointers to find the middle book
    if (bookList.length === 0){
        return "This list is empty and has no middle";
    }
    let slowPointer = 0; //Will move 1 step at a time
    let fastPointer = 0; //Will move 2 steps at a time

    //move pointers until the fast pointer reaches or exceeds the end
    while(fastPointer +1 < bookList.length){
        slowPointer++ //move 1 step
        fastPointer += 2 //move 2 steps
    }
    // Return the middle book and its position
    return `Middle Book is "${bookList[slowPointer]}" at position ${slowPointer}.`
}

function hasDuplicateInSortedList(sortedBooks) {
    // Use two pointers to detect if there are consecutive duplicates
    if (sortedBooks.length === 0){
        return "This catalog is empty. 0 duplicates removed.";
    }
    let writePointer = 0 //Points to where next unique book should go
    let duplicatesRemoved = 0

    //start reading at index 1 rather than index 0 for comparisons
    for (let readPointer=1; readPointer < sortedBooks.length; readPointer++){
        const currentBook = sortedBooks[readPointer]
        const lastUniqueBook = sortedBooks[writePointer] //starts at the 0 index as declared in line 71

        if (currentBook !== lastUniqueBook){
            //Found a new unique book, move it to the write position.
            writePointer++;
            sortedBooks[writePointer] = currentBook
        } else {
            //Found a duplicate book, skip it.
            duplicatesRemoved++
        }
    }
    //Create a clean catalog with only unique books
    const cleanCatalog = sortedBooks.slice(0, writePointer + 1)
    // Return true if duplicates found, false otherwise
    return cleanCatalog
}

const readingList = ["Book A", "Book B", "Book C", "Book D", "Book E"];
const sortedBooks = ["Animal Farm", "Animal Farm", "Dune", "Foundation"];
console.log("Middle book:", findMiddleBookInList(readingList));
console.log("Has duplicates:", hasDuplicateInSortedList(sortedBooks));

// ==============================
// Exercise 3: Help Eleanor Analyze Book Sequences
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Find the best consecutive sequence of books based on popularity scores

function findBestBookSequence(popularityScores, sequenceLength) {
    // Use sliding window to find the sequence with highest total popularity
    let maxSum = 0;
    let currentSum = 0;
    let bestStart = 0;

    // Sum first window
    for (let i = 0; i < sequenceLength; i++) {
        currentSum += popularityScores[i];
    }
    maxSum = currentSum;

    // Slide window
    for (let i = sequenceLength; i < popularityScores.length; i++) {
        currentSum = currentSum - popularityScores[i - sequenceLength] + popularityScores[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
            bestStart = i - sequenceLength + 1;
        }
    }

    return { start: bestStart, totalPopularity: maxSum };
}


function findShortestSequenceAboveThreshold(scores, threshold) {
    // Use dynamic sliding window to find shortest sequence above threshold
    let left =0;
    let currentSum = 0;
    let minLength = Infinity;
    let startIdx = -1;

    for (let right = 0; right < scores.length; right++) {
        currentSum += scores[right];

        // Shrink window from the left if sum is big enough
        while (currentSum >= threshold) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                startIdx = left;
            }
            currentSum -= scores[left];
            left++;
        }
    }

    return minLength === Infinity
        ? null
        : { length: minLength, start: startIdx };
}

const bookPopularity = [2, 1, 4, 9, 3, 7, 5, 8, 6];
console.log("Best sequence of 3:", findBestBookSequence(bookPopularity, 3));
console.log("Shortest above 15:", findShortestSequenceAboveThreshold(bookPopularity, 15));

// ==============================
// Exercise 4: Help Eleanor Solve Palindrome Mysteries
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Check if book titles are palindromes and find the longest palindromic substring

function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }

    return true;
}

function longestPalindromicSubstring(text) {
    if (!text) return "";

    let start = 0;
    let maxLength = 1;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < text.length && text[left].toLowerCase() === text[right].toLowerCase()) {
            // Stop if characters don’t match (case-insensitive)
            left--;
            right++;
        }
        // After breaking, left and right have gone one step too far
        return [left + 1, right - 1];
    };

    for (let i = 0; i < text.length; i++) {
        // Odd-length palindrome
        let [l1, r1] = expandAroundCenter(i, i);
        if (r1 - l1 + 1 > maxLength) {
            start = l1;
            maxLength = r1 - l1 + 1;
        }

        // Even-length palindrome
        let [l2, r2] = expandAroundCenter(i, i + 1);
        if (r2 - l2 + 1 > maxLength) {
            start = l2;
            maxLength = r2 - l2 + 1;
        }
    }

    return text.slice(start, start + maxLength);
}

const mysteryTitles = ["A Santa at NASA", "Racecar", "Hello World", "Madam"];
mysteryTitles.forEach(title => {
  console.log(`"${title}" is palindrome: ${isPalindrome(title)}`);
});
console.log("Longest palindrome in 'A Santa at NASA':", longestPalindromicSubstring("A Santa at NASA"));
    