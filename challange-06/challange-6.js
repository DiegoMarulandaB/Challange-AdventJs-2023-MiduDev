function maxDistance(movements) {
  let distance = 0;
  let lastMovement = null; // Using camelCase for consistency

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < movements.length; i++) {
    const currentDirection = movements[i];

    switch (currentDirection) {
      case '>':
        // eslint-disable-next-line no-plusplus
        distance++;
        lastMovement = '>';
        break;
      case '<':
        // eslint-disable-next-line no-plusplus
        distance--;
        lastMovement = '<';
        break;
      case '*':
        distance += lastMovement === '<' ? -1 : 1;
        break;
      default:
        throw new Error(`Invalid movement: ${currentDirection}`);
    }
  }

  return Math.abs(distance);
}

// test 7 and 8 failed
maxDistance();
