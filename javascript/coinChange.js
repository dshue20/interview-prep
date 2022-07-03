var coinChange = function (coins, amount, memo = {}) {
  if (memo[amount]) return memo[amount];
  if (!amount) return 0;
  if (amount < Math.min(...coins)) return -1;
  let options = [];
  coins.sort((x, y) => y - x);
  // console.log(
  //   'check: ',
  //   amount,
  //   coins,
  //   Math.min(coins),
  //   amount < Math.min(coins)
  // );
  for (let coin of coins) {
    // console.log(coin, amount);
    // console.log(memo, amount, memo[amount]);
    const toAdd = coinChange(coins, amount - coin, memo);
    if (toAdd !== -1) options.push(1 + toAdd);
  }
  if (!options.length) return -1;
  console.log(options, amount);
  const answer = Math.min(...options);
  memo[amount] = answer;
  return answer;
};

console.log(coinChange([186, 419, 83, 408], 6249));
