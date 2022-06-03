/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  // dp[i]的定义为：总金额为i，coins数组最少有dp[i]个金额填满数组
  // 因为取最小值，所以数组中默认都填充最大值
  // 判断的时候如果dp[x] = Number.MAX_SAFE_INTEGER，说明容量为x时候不存在放满的情况
  let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  // 总额为0时候，没法填充，所以初始化为0
  dp[0] = 0;

  // 这里参考dp[i]的定义，i为背包容积，所以从1开始遍历
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      // 容量不足当前硬币的面额，直接跳过
      if (i < coins[j]) {
        continue
      }
      // 不放coins[j]时候，剩下的容量为i-coins[i]，这个容量有能装满的个数
      if (dp[i - coins[j]] !== Number.MAX_SAFE_INTEGER) {
        // 不放coins[j]的个数 + 1,即为放coins[j]的个数
        // 跟之前存在的情况对比，取较小值
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
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
