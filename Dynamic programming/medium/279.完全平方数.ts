/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 */

// @lc code=start
function numSquares(n: number): number {
  // dp[i]的定义是和为i的完全平方数最小有dp[i]个
  let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  // 容量为01时候，有0个数字的完全平方数可填满背包
  dp[0] = 0

  // 从容量=1开始计算背包的完全平方数个数
  for (let i = 1; i <= n; i++) {
    // 完全平方数乘积不能超过背包容量，所以j * j <= i
    for (let j = 1; j * j <= i; j++) {
      // 不方当前j的情况存在，即不等于Number.MAX_SAFE_INTEGER
      if (dp[i - j * j] !== Number.MAX_SAFE_INTEGER) {
        // 那么当前不放j的数量 + 1，则是完全平方数个数
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
      }
    }
  }

  return dp[n]
};
// @lc code=end

