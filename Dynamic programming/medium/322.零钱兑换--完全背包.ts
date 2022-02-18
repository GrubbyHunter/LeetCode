/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  // dp[i]的定义为：总金额为i，coins数组最少有dp[i]个金额填满数组
  // 因为取最小值，所以数组中默认都填充最大值
  let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  // 总额为0时候，没法填充，所以初始化为0
  dp[0] = 0;

  // 先遍历金额，也即是背包大小，计算每种容量的背包，最小个数的金额填满
  for (let i = 1; i < amount + 1; i++) {
    // 后遍历物品，也就是钞票，用不同金额的往背包里面填充，统计背包放满时候的装入数量
    for (let j = 0; j < coins.length; j++) {
      // 背包容量必须大于当前面额，才能装入
      // 同时当前金额不装入的情况的背包dp[i-coins[j]]，没有被初始化过（等于Number.MAX_SAFE_INTEGE），同样没法计算
      if (i >= coins[j] && dp[i - coins[j]] !== Number.MAX_SAFE_INTEGER) {
        // 不放当前硬币的情况dp[i - coins[i]] 加上当前硬币 +1，即等于填满背包的个数
        // 求出各种硬币面额装满背包情况中，用的个数最少的情况
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  // 无法完成初始化，就是无法填满背包，返回-1
  if (dp[amount] === Number.MAX_SAFE_INTEGER) {
    return -1;
  }

  return dp[amount];
}
// @lc code=end
