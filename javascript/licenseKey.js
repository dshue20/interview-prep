// You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

// We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

// Return the reformatted license key.

var licenseKeyFormatting = function (str, k) {
  str = str.split('-').join('');
  let count = 1;
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i].toUpperCase();
    if (count === k && i) {
      newStr += '-';
      count = 1;
    } else {
      count++;
    }
  }
  return newStr.split('').reverse().join('');
};
