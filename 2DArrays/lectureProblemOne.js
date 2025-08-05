function getAverageBrightness(image) {
    let total = 0
    let count = 0
    for(let i = 0; i < image.length; i++){
        for(let j = 0; j < image[i].length; j++){
            total = total + image[i][j]
            count++
        }
    }
    return total/count; //replace with actual calculation
  }
  
  // Test image (small grayscale image)
  const image = [
      [100, 200, 150, 50],
      [60, 170, 140, 90],
      [80, 110, 220, 130],
      [30, 70, 160, 190]
  ];

  const averageBrightness = getAverageBrightness(image);
  console.log('Average Brightness:', averageBrightness);
  
  //wants to return the average brightness of the array