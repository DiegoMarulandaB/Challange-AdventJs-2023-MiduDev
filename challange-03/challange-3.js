function findNaughtyStep(original, modified) {
  // Code here
  const modifiedArray = modified.split('');
  const originalArray = original.split('');

  let difference = '';

  const longestArray = modifiedArray.length > originalArray.length ? modifiedArray : originalArray;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < longestArray.length; i++) {
    if (modifiedArray[i] !== originalArray[i]) {
      difference = longestArray[i];
      break;
    }
  }

  return difference.toString();
}

findNaughtyStep();
