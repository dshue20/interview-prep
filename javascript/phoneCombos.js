// Given a string containing digits from 2-9 inclusive, return all possible letter
// combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

var letterCombinations = function (digits) {
  if (!digits.length) return [];
  let mapping = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  let strs = mapping[digits[0]];
  for (let i = 1; i < digits.length; i++) {
    let newStrs = [];
    for (let str of strs) {
      for (let letter of mapping[digits[i]]) {
        newStrs.push(str + letter);
      }
    }
    strs = newStrs;
  }
  return strs;
};

console.log(letterCombinations('23'));
