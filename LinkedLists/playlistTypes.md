## Playlist Types

### The Basic Playlist Revisted
A singly linked list node only knows about the next node, which means you can only traverse in one direction.
For examples, look at the introToLinkedLists.js file.

### The Bidirectional Linked List
```
class DoublySongNode {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.next = null;    // Points to next song
    this.prev = null;    // Points to previous song
  }
  
  toString() {
    return `${this.title} - ${this.artist}`;
  }
}

class DoublyLinkedPlaylist {
  constructor() {
    this.head = null;  // First song
    this.tail = null;  // Last song (for efficiency)
    this.size = 0;
  }
  
  addSong(title, artist) {
    const newSong = new DoublySongNode(title, artist);
    
    if (!this.head) {
      // First song in playlist
      this.head = newSong;
      this.tail = newSong; //You need this else the tail will be null which breaks adding new songs to the end since you need a vaild tail.
    } else {
      // Add to the end
      newSong.prev = this.tail;
      this.tail.next = newSong;
      this.tail = newSong;
    }
    
    this.size++;
    console.log(`🎵 Added: ${newSong.toString()}`);
  }
  
  // Navigate forward from current song
  playNext(currentSong) {
    if (currentSong && currentSong.next) {
      console.log(`▶️ Playing next: ${currentSong.next.toString()}`);
      return currentSong.next;
    } else {
      console.log("🔚 End of playlist");
      return null;
    }
  }
  
  // Navigate backward from current song
  playPrevious(currentSong) {
    if (currentSong && currentSong.prev) {
      console.log(`⏮️ Playing previous: ${currentSong.prev.toString()}`);
      return currentSong.prev;
    } else {
      console.log("🔚 Beginning of playlist");
      return null;
    }
  }
}
```

### Comparing Playlist Types
A doubly linked playlist has a O(1) time complexity when moving from one song to the next, forward or backward. However, each node now stores two traversal points which requires more memory.

```
// Removing a song from a doubly linked playlist
removeSong(songToRemove) {
  // Update the previous song's next pointer
  if (songToRemove.prev) {
    songToRemove.prev.next = songToRemove.next; //Go to the previous song to songToRemove and then rewrite it's next to equal songToRemove.next
  } else {
    // Removing the first song
    this.head = songToRemove.next; 
  }
  
  // Update the next song's previous pointer
  if (songToRemove.next) {
    songToRemove.next.prev = songToRemove.prev;
  } else {
    // Removing the last song
    this.tail = songToRemove.prev;
  }
  
  this.size--;
  console.log(`🗑️ Removed: ${songToRemove.toString()}`);
}
```

### The Circular Linked List
A circular linked list loops back to the head after the tail.

```
class CircularPlaylist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  addSong(title, artist) {
    const newSong = new SongNode(title, artist);
    
    if (!this.head) {
      // First song - points to itself
      this.head = newSong;
      newSong.next = newSong;
    } else {
      // Find the last song (the one pointing to head)
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      
      // Insert new song between last song and head
      current.next = newSong;
      newSong.next = this.head;
    }
    
    this.size++;
    console.log(`🎵 Added to circular playlist: ${newSong.toString()}`);
  }
  
  playForever(startingSong, maxSongs = 10) {
    let current = startingSong || this.head;
    let count = 0;
    
    console.log("🎉 Starting infinite party playlist:");
    
    while (count < maxSongs) {
      console.log(`${count + 1}. ${current.toString()}`);
      current = current.next;
      count++;
    }
    
    console.log("🎵 ...and it continues forever!");
  }
}
```
## Circular Lists
```
class SmartCircularPlaylist extends CircularPlaylist {
  constructor() {
    super();
    this.currentSong = null;
  }
  
  play() {
    if (!this.head) {
      console.log("📭 Playlist is empty");
      return null;
    }
    
    // Start from current position or beginning
    this.currentSong = this.currentSong || this.head;
    console.log(`🎵 Now playing: ${this.currentSong.toString()}`);
    return this.currentSong;
  }
  
  next() {
    if (this.currentSong) {
      this.currentSong = this.currentSong.next;
      console.log(`⏭️ Next: ${this.currentSong.toString()}`);
      return this.currentSong;
    }
    return this.play();
  }
  
  // Jump to any song and continue from there
  jumpTo(songTitle) {
    let current = this.head;
    let found = false;
    
    do {
      if (current.title === songTitle) {
        this.currentSong = current;
        console.log(`🎯 Jumped to: ${current.toString()}`);
        found = true;
        break;
      }
      current = current.next;
    } while (current !== this.head);
    
    if (!found) {
      console.log(`❌ Song "${songTitle}" not found in playlist`);
    }
    
    return found;
  }
}
```

## Applications of Different Lists
**Singly Linked Lists**:
- Music Streaming -> basic playlist playback
- Browser History -> forward navigation only
- Undo Systems -> simple action history
- RSS Feeds -> chronological article lists

**Doubly Linked Lists**:
- Media Players -> forward and backward navigation
- Text Editors -> cursor movement in documents
- Browser Tabs -> navigate between open tabs
- Photo Galleries -> previous/next image viewing

**Circular Linked Lists**:
- Round Robin Scheduling -> CPU task scheduling
- Multiplayer Games -> turn-based player rotation
- Carousel Displays -> infinite image rotation
- Background Music -> continuous playlist looping

## Floyd Cycle Detection
Used to detect if there is some node in the list that can be reached again by continuously following the next node in the linked list then the list has a cycle.
- In a singly linked list, you will never hit a cycle as there is no looping back at any point.
- In a cycle, at some point you will hit the same node twice.

Using the Floyd Cycle Detection or Tortoise and Hare Algorithm is vital to solving this without using additional memory or increasing the time complexity. 
- The tortise moves through the linked list one node at a time
- The hare hops two spots ahead.
- If there is a cycle, they will eventually land on the same node. 
- To find where the cycle starts, after the two met, you set one point back to the head and then have each one hop one at a time they will meet at the start of the cycle.

```
function floydCycle(ListNode, head){
  if (head === null || head.next === null) return false;

  let slowNode= head;
  let fastNode = head;

  while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fst.next.next;
    if (slow === fast) break;
  }
  if (slow !== fast) return null;

  slow = head;
  while (slow !== fast){
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
```

## Choosing the Right Playlist Type

### Singly Linked Lists
- Memory is limited, only one pointer per node
- Simple forward navigation, no need to go backward
-  Implementation Simplicity, easier to code and debug
- Append-heavy operations, frequently adding to the end

### Doubly Linked Lists
- Bi-directional Navigation, need to move forward or backward
- Frequent Deletions, easier to remove nodes when you have a previous pointer.
- LRU Caches, need to move items to front/back efficiently
- Text Editing, cursor can move in both directions

### Circular Lists
- Continuous Cycling, round-robin or infinite loops needed
- No Clear Start/End, data naturally forms a cycle
- Resource Sharing, CPU scheduling, printer queues
- Game mechanics, turn based systems, circular menus

## Performance Comparison
|Operation|Singly Linked|Doubly Linked|Circular|
|--------|----------|----------|----------|
|Memory per Node| 1 pointer| 2 pointers| 1 pointer|
|Forward Traversal| O(1) per step| O(1) per step| O(1) per step|
|Backward Traversal|O(n) from start| O(1)per step|O(n) around|
|Insert at Beginning| O(1)|O(1)|O(1)|
|Insert at End|O(n)or O(1) with tail pointer|O(1)|(O(n) or O(1) with tail pointer)|
|Delete Node| O(n) to find prev| O(1) if have node|O(n) to find prev|
|Cycle Detection|Not applicable|Not applicable|Built-in|