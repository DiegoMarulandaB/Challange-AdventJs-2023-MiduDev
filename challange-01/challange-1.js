// Answer

function findFirstRepeated(gifts) {
  // Code here

  const assignedNumbers = {};

  for (let i = 0; i < gifts.length; i++) {
    const currentNumber = gifts[i];

    // If the number has already been assigned, return it
    if (assignedNumbers[currentNumber] !== undefined) {
      return currentNumber;
    }

    // Record the index of the first occurrence of the number
    assignedNumbers[currentNumber] = i;
  }

  // If no repeating number is found, return -1
  return -1;
}
