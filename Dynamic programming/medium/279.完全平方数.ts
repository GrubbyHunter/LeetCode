/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 */

// @lc code=start
function numSquares(n: number): number {
  // dp[i]的定义是和为i的完全平方数最小有dp[i]个
  let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  // 遍历背包
  for (let i = 1; i <= n; i++) {
    // 遍历物品，是求完全平方和，所以物品遍历时候满足物品值的平方小于等于i即可
    for (let j = 1; j * j <= i; j++) {
      // 地推公式：j是一个完全平方数，那么有dp[i-j*j]种可能
      // 再加上j*j这一种可能，就能满足条件
      // 例如dp[0] = 0, i = 4时候，j = 2满足条件，dp[4] = dp[4- 2*2] +1
      // dp[4] = dp[0] + 1 => 1 
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }

  return dp[n]
};
// @lc code=end

