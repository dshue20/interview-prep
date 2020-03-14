// Given n pairs of parentheses, write a function to generate all combinations of 
// well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

var generateParenthesis = function(n, str="", numLeft=0, numRight=0) {
    let answer = [];
    if (numLeft < n){
        answer = answer.concat(generateParenthesis(n, str + "(", numLeft + 1, numRight))
    }
    if (numRight < numLeft){
        answer = answer.concat(generateParenthesis(n, str + ")", numLeft, numRight + 1))
    }
    if (str.length === n*2) answer.push(str);
    return answer;
};