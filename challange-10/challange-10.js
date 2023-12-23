function createChristmasTree(ornaments, height) {
  let result = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= height; i++) {
    const spaces = ' '.repeat(height - i);
    const ornamentLine = Array.from({ length: i * 2 - 1 }, (_, index) => ornaments[index % ornaments.length]).join(' ');
    result += `${spaces}${ornamentLine}\n`;
  }

  // Add the trunk
  const trunkSpaces = ' '.repeat(height - 1);
  result += `${trunkSpaces}|\n`;

  return result;
}

// has flaws
createChristmasTree();
