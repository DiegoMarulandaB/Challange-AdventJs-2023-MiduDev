function adjustLights(lights) {
  let changesNeeded = 0;

  // Iterate through the lights starting from the second one
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < lights.length; i++) {
    // Check if the current light has the same color as the previous one
    if (lights[i] === lights[i - 1]) {
      // Change the current light to the opposite color
      if (lights[i] === '🔴') {
        // eslint-disable-next-line no-param-reassign
        lights[i] = '🟢';
      } else {
        // eslint-disable-next-line no-param-reassign
        lights[i] = '🔴';
      }
      // Increment the count of changes needed
      // eslint-disable-next-line no-plusplus
      changesNeeded++;
    }
  }

  return changesNeeded;
}

adjustLights();