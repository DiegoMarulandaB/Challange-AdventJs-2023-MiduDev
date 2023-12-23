function drawGift(size, symbol) {
  const cube = [];
  const borderSymbol = '#';
  const bgSymbol = symbol.toString();
  const width = size - 2;

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= size; i++) {
    let newline = ' '.repeat(size - i);

    if (i === 1) {
      newline += borderSymbol.repeat(size);
    } else if (i === size) {
      newline += borderSymbol.repeat(size) + bgSymbol.repeat(width) + borderSymbol;
    } else {
      newline += borderSymbol + bgSymbol.repeat(width) + borderSymbol + bgSymbol.repeat(i - 2) + borderSymbol;
    }

    newline += '\n';
    cube.push(newline);
  }

  // eslint-disable-next-line no-plusplus
  for (let j = width; j >= 0; j--) {
    cube.push(`${cube[j].trim()}\n`);
  }

  return cube.join('');
}

drawGift();
