// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

var climbStairs = function(n, memo={}) {
    if (memo[n]) return memo[n];
    if (!n) return 1;
    if (n < 0) return 0;
    let firstStep = climbStairs(n-1, memo);
    let secondStep = climbStairs(n-2, memo);
    memo[n-1] = firstStep;
    memo[n-2] = secondStep;
    return firstStep + secondStep;
};