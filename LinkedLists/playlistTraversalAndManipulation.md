## Basic Traversal Pattern
```
class SongNode {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration; // in seconds
    this.next = null;
  }
  
  toString() {
    const minutes = Math.floor(this.duration / 60);
    const seconds = this.duration % 60;
    return `${this.title} - ${this.artist} (${minutes}:${seconds.toString().padStart(2, '0')})`;
  }
}

// Basic traversal pattern
function displayPlaylist(head) {
  console.log("🎵 Current Playlist:");
  let current = head;
  let position = 1;
  
  while (current !== null) {
    console.log(`${position}. ${current.toString()}`);
    current = current.next; // Move to next song
    position++;
  }
  
  if (position === 1) {
    console.log("📭 Playlist is empty");
  }
}
```

## Searching Through Playlists
```
// Search by title
function findSongByTitle(head, targetTitle) {
  let current = head;
  let position = 0;
  
  while (current !== null) {
    if (current.title.toLowerCase() === targetTitle.toLowerCase()) {
      console.log(`🎯 Found "${targetTitle}" at position ${position + 1}`);
      return { song: current, position };
    }
    
    current = current.next;
    position++;
  }
  
  console.log(`❌ Song "${targetTitle}" not found in playlist`);
  return null;
}

// Search by artist
function findSongsByArtist(head, targetArtist) {
  let current = head;
  let position = 0;
  const foundSongs = [];
  
  console.log(`🔍 Searching for songs by "${targetArtist}":`);
  
  while (current !== null) {
    if (current.artist.toLowerCase().includes(targetArtist.toLowerCase())) {
      foundSongs.push({ song: current, position });
      console.log(`  ${position + 1}. ${current.toString()}`);
    }
    
    current = current.next;
    position++;
  }
  
  if (foundSongs.length === 0) {
    console.log(`❌ No songs by "${targetArtist}" found`);
  }
  
  return foundSongs;
}
```

## Advanced Traversal: Two Pointer Techniques
```
function findMiddleSong(head) {
  if (!head) {
    console.log("📭 Playlist is empty");
    return null;
  }
  
  let slow = head;  // Moves one step at a time
  let fast = head;  // Moves two steps at a time
  
  // When fast reaches the end, slow will be at the middle
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  console.log(`🎯 Middle song: ${slow.toString()}`);
  return slow;
}
```

## Common Traversal Pitfalls
### Pitfall 1: Losing the Head in Traversal
```
// ❌ Wrong - loses the original head
function badTraversal(head) {
  while (head !== null) {
    console.log(head.title);
    head = head.next; // Modifies the original head!
  }
}

// ✅ Correct - preserves the head
function goodTraversal(head) {
  let current = head; // Use a separate pointer
  while (current !== null) {
    console.log(current.title);
    current = current.next;
  }
}
```

### Pitfall 2: Null Pointer Access
```
// ❌ Wrong - can crash if current is null
function badAccess(head) {
  let current = head;
  while (current.next !== null) { // Crashes if head is null!
    current = current.next;
  }
}

// ✅ Correct - checks for null first
function goodAccess(head) {
  let current = head;
  while (current !== null && current.next !== null) {
    current = current.next;
  }
}
```

