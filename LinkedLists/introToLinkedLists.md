## Linked Lists
Each item or **node** in a linked list contains the elements of the item and the next location.
- Linked Lists start at the **head** which is the first item in the linked list.

```
// Each song is a node with data and a connection
class SongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null; // Points to the next song
  }
  
  toString() {
    return `${this.title} - ${this.artist}`;
  }
}

// Create some song nodes
const song1 = new SongNode("Bohemian Rhapsody", "Queen");
const song2 = new SongNode("Hotel California", "Eagles");
const song3 = new SongNode("Stairway to Heaven", "Led Zeppelin");

// Connect them together
song1.next = song2;
song2.next = song3;
// song3.next is null (end of playlist)

console.log("First song:", song1.toString());
console.log("Next song:", song1.next.toString());
console.log("Third song:", song1.next.next.toString());

function playPlaylist(firstSong) {
  let currentSong = firstSong;
  let songNumber = 1;
  
  console.log("🎵 Now Playing Playlist:");
  
  while (currentSong !== null) {
    console.log(`${songNumber}. ${currentSong.toString()}`);
    currentSong = currentSong.next; // Move to the next song
    songNumber++;
  }
  
  console.log("🎵 Playlist finished!");
}

// Play our playlist
playPlaylist(song1);
```
### Dynamic Insertions
```
// Original playlist: Song1 → Song2 → Song3
// Want to insert "Thunderstruck" between Song1 and Song2

const newSong = new SongNode("Thunderstruck", "AC/DC");

// Step 1: Make new song point to Song2
newSong.next = song1.next;

// Step 2: Make Song1 point to new song
song1.next = newSong;

// Result: Song1 → Thunderstruck → Song2 → Song3
```

## Real World Applications
1. Browser History
2. Undo Systems
3. Social Media Feeds
4. GPS Navigation

## Understanding the Trade-Offs
Linked List Operations
|Operation|Time Complexity|Explanation|
|---------|----------|----------|
|Traversal|O(n)|Must visit each node sequentially from head to tail.|
|Search|O(n)|Must traverse from head until target is found|
|Insert at the Beginning|O(1)|Just update head pointer and new nodes next|
|Insert at the End|O(n)|Must traverse to find the last node first|
|Insert at Position|O(n)|Must traverse to the position, then O(1) to insert|
|Delete at the Beginning| O(1)| Just update head pointer to head.next|
|Delete at End|O(n)| Must traverse to find the second-to-last node|
|Delete at Position|O(n)|Must traverse to find the node, then O(1) to delete|
|Random Access|O(n)| Must traverse from head to reach specific position|

Array Operations (for comparison)
|Operation|Time Complexity|Explanation|
|---------|----------|----------|
|Traversal| O(n)|Must visit each element from index 0 to n-1|
|Search|O(n)|Must check each element until target is found|
|Insert at Beginning|O(n)|Must shift all existing elements to the right|
|Insert at End| O(1)|Direct access to end position|
|Insert at Position|O(n)|Must shift all elements after position to the right|
|Delete at Beginning|O(n)|Must shift all remaining elements to the left|
|Delete at End|O(n)|Direct access to end position|
|Delete at Position| O(n)|Must shift all elements after position to the left|
|Random Access|O(1)| Direct access using index calculation|

## When to Choose Each Structure
**The Key Takeaway is that linked lists are better for insertions and deletions at the beginning while arrays are better for random access and operations at the end** 

Choose Linked Lists When:
- Frequent insertions/deletions at the beginning
- Unknown or highly variable data size
- You rarely need random access to elements
- Sequential processing is the primary use case
- Memory is fragmented or you need dynamic allocation

Choose Arrays When:
- Frequent random access to elements by index
- Mathematical operations or algorithms requiring indexing
- Memory efficiency is critical
- Cache performance matters for your application
- You primarily add/remove elements at the end
