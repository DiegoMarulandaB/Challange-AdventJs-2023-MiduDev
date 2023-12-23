function decode(message) {
  const stack = [];
  let result = '';

  [...message].forEach((char) => {
    if (char === '(') {
      // Push the current result and reset it
      stack.push(result);
      result = '';
    } else if (char === ')') {
      // Pop the previous result and reverse it
      result = stack.pop() + result.split('').reverse().join('');
    } else {
      // Add characters to the current result
      result += char;
    }
  });

  return result;
}
decode();