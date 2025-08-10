// Song node for linked list implementation
class SongNode {
    constructor(title, artist, duration) {
      this.title = title;
      this.artist = artist;
      this.duration = duration;
      this.next = null;
    }
  }
  
  // Array-based playlist for comparison
  class ArrayPlaylist {
    constructor() {
      this.songs = [];
    }
    
    addSong(title, artist, duration) {
      this.songs.push({ title, artist, duration });
    }
    
    getSongAt(index) {
      return this.songs[index] || null;
    }
    
    insertAt(index, title, artist, duration) {
      this.songs.splice(index, 0, { title, artist, duration });
    }
  }
  
  // Linked list playlist for comparison
  class LinkedPlaylist {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    
    addSong(title, artist, duration) {
      const newSong = new SongNode(title, artist, duration);
      if (!this.head) {
        this.head = newSong;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newSong;
      }
      this.size++;
    }
    
    getSongAt(index) {
      let current = this.head;
      for (let i = 0; i < index && current; i++) {
        current = current.next;
      }
      return current;
    }
  }
  
  // ⏱️ Alex's Performance Analysis Challenge!
  // 🔓 Uncomment the below code section and implement the required logic:
  
  
function comparePerformance(arrayPlaylist, linkedPlaylist, operation, index = 0) {
    const results = {
      operation: operation,
    };
  
    // TODO: Strings below should be replaced with the appropriate time complexity 
    // (e.g., O(1), O(n), O(n²), etc.) for the corresponding operation
  
    switch (operation) {
        case "access":
        results.arrayComplexity = "O(1)";
        results.linkedComplexity = "O(n)";
        break;
      
        case "add_end":
        results.arrayComplexity = "O(1)";
        results.linkedComplexity = "O(1)";
        break;
      
        case "add_beginning":
        results.arrayComplexity = "O(n)";
        results.linkedComplexity = "O(1)";
        break;
    }
    
    return results;
}
