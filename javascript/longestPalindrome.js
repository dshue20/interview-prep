// Given a string s, return the longest palindromic substring in s.

var longestPalindrome = function (str) {
  let answer = '';
  for (let idx = 0; idx < str.length; idx++) {
    let attempt = helper(idx, str);
    if (attempt.length > answer.length) answer = attempt;
  }
  return answer;
};

var helper = function (idx, str) {
  let answer = '';

  // check for 1-char center
  let left = idx;
  let right = idx;
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    let attempt = str.slice(left, right + 1);
    if (attempt.length > answer.length) answer = attempt;
    left--;
    right++;
  }

  // check for 2-char center
  left = idx;
  right = idx + 1;
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    let attempt = str.slice(left, right + 1);
    if (attempt.length > answer.length) answer = attempt;
    left--;
    right++;
  }
  return answer;
};
