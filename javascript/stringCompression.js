// In this exercise, you're going to decompress a compressed string.

// Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:

// The input

// 3[abc]4[ab]c

// Would be output as

// abcabcabcababababc

// Other rules
// Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa

// One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab

// Characters allowed as input include digits, small English letters and brackets [ ].

// Digits are only to represent amount of repetitions.

// Letters are just letters.

// Brackets are only part of syntax of writing repeated substring.

// Input is always valid, so no need to check its validity.

const decompress = (str) => {
  const stack = [];
  let currentNum = '';
  let currentStr = '';
  let finalStr = '';
  let currIdx = 0;
  while (currIdx < str.length) {
    let char = str[currIdx];
    if (parseInt(char) || char === '0') {
      // if it's a number
      currentNum += char;
    } else if (char === '[') {
      // recurse on inner stuff
      currIdx++;
      stack.push('[');
      while (stack.length) {
        char = str[currIdx];
        if (char === '[') stack.push('[');
        if (char === ']') stack.pop();
        if (stack.length) {
          currentStr += char;
          currIdx++;
        }
      }
      currentStr = decompress(currentStr);

      if (currentNum) {
        // repeat recursed stuff
        let numRepeats = parseInt(currentNum);
        for (let i = 0; i < numRepeats; i++) {
          finalStr += currentStr;
        }
      }
      currentNum = ''; // reset everything
      currentStr = '';
    } else {
      // if it's a letter
      finalStr += char;
    }
    currIdx++;
  }
  return finalStr;
};

console.log(decompress('abc')); // => abc
console.log(decompress('10[a]')); // => aaaaaaaaaa
console.log(decompress('3[abc]4[ab]c')); // => abcabcabcababababc
console.log(decompress('2[3[a]b]')); // => aaabaaab
