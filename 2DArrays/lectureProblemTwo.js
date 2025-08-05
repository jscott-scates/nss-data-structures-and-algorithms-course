function findTemperatureSpikes(grid) {
    // TODO: Implement the following steps
    // 1. Create a result grid to mark temperature spikes
    // 2. For each cell, check its adjacent neighbors
    // 3. Mark cells with large temperature differences
    // Return: Grid where 1 = spike found, 0 = normal
    
    const rows = grid.length;
    const cols = grid[0].length;
    const result = Array(rows).fill().map(() => Array(cols).fill(0));
    
	//iterate through rows and cols, and for each cell, check each direction
    return result;
}

// Test temperature readings
const temperatures = [
    [70, 71, 70, 70],
    [71, 76, 70, 71],
    [70, 71, 70, 72],
    [70, 70, 70, 71]
];

console.log(findTemperatureSpikes(temperatures));

//returns an array that has the temp spikes. 5+ degres