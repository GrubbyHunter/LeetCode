/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  let dp = [1, 2]

  // 这里不使用递归，直接用数组，减少内存占用
  // 递归每次都会从n=1开始计算，直接超时
  for (let i = 2; i < n; i++) {
    // i-1再走一步到达i
    // i-2 再走两步到达i
    // 所以到第i层有dp[i - 1] + dp[i - 2]种方法
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  // n為下标，所以要-1
  return dp[n - 1]
};
// @lc code=end

