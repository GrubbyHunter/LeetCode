// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
function coinChange(coins: number[], amount: number): number {
  let count = 0;
  // 降序排列
  coins.sort((a, b) => b - a);

  if (amount === 0) {
    return count;
  }

  const backTracking = (sum: number, index: number) => {
    if (sum === 0) {
      return true;
    }

    let size = Math.floor(sum / coins[index]);

    for (let i = size; i > 0; i--) {
      if (sum < coins[i]) {
        continue;
      }

      count += a;
      sum = sum - a * coins[i];

      if (backTracking(sum, index)) {
        return true;
      }

      count--;
      sum = sum + coins[i];
    }

    return false;
  };

  backTracking(amount, 0);

  return count === 0 ? -1 : count;
}
coinChange([186, 419, 83, 408], 6249);
// @lc code=end
