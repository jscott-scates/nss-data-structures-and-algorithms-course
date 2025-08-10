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
