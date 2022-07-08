// A child is running up a staircase with n steps and can hop either 1 step,
// 2 steps, or 3 steps at a time. Implement a method to count how many
// possible ways the child can run up the stairs.

const tripleStep = (n) => {
  let dp = new Array(n).fill(0);
  dp[n - 1] = 1;
  dp[n - 2] = 2;
  dp[n - 3] = 4;
  for (let i = 4; i <= n; i++) {
    dp[n - i] = dp[n - i + 1] + dp[n - i + 2] + dp[n - i + 3];
  }
  return dp[0];
};
