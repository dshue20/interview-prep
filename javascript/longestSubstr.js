// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (str) {
  let leftIdx = 0;
  let rightIdx = 0;
  let currLength = 0;
  let maxLength = 0;
  let set = new Set();
  while (rightIdx < str.length) {
    let letter = str[rightIdx];
    console.log(leftIdx, rightIdx, letter, currLength);
    if (!set.has(letter)) {
      // haven't seen the letter yet
      set.add(letter);
      currLength++;
      rightIdx++;
      if (currLength > maxLength) maxLength = currLength;
    } else {
      // have already seen the letter
      let seenLetter = false;
      while (!seenLetter && leftIdx < rightIdx) {
        // reset leftIdx;
        if (str[leftIdx] === letter) seenLetter = true;
        set.delete(str[leftIdx]);
        leftIdx++;
        currLength--;
      }
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring('tmmzuxt'));
