// A classic problem is counting connected groups of cells. 
// Think of it like counting the number of islands on a map where water is 0 and land is 1:

function countIslands(grid) {
    // Create a copy of the grid to avoid modifying the original
    const gridCopy = grid.map(row => [...row]);
    const rows = gridCopy.length;
    const cols = gridCopy[0].length;
    let count = 0;

    //direction arrays
    
    function explore(r, c) {
        //TODO: check if these coordinates are out of bounds or in water. If so, just return
        if (r < 0 || r >= rows || c < 0 || c >= cols || gridCopy[r][c] === 0) return;
        //TODO: Mark this element as visited by changing its value to water (0)
        gridCopy[r][c] = 0;
        //TODO: Recursively call explore with all 4 neighbors of the specified element 
        explore(r - 1, c); //up
        explore(r + 1, c); //down
        explore(r,c - 1); //left
        explore(r,c + 1); //right 
    }
    
    //TODO: traverse through the copy of the grid. At each element, if it's land, then augment the count and explore from this cell, which will essentially flood fill the island with water to prevent counting it again
    for (let r=0; r < rows; r++) {
        for (let c = 0; c < cols; c++){
            if (gridCopy[r][c] === 1){
                count++;
                explore(r,c); //floods the island and turns it to 0
            }
        }
    }
    return count;
  }
  
  
  const map = [
  [0,1,0,0,1,1],
  [1,1,0,0,0,0],
  [0,0,0,1,1,0],
  [1,0,0,0,1,1],
  [1,0,0,0,0,1],
  ]
  
  const islands = countIslands(map);
  console.log("Islands: "+islands);