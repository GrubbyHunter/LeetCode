/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  let m = grid.length, n = grid[0].length
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

  let sum = 0
  for (let i = 0; i < m; i++) {
    sum += grid[i][0]
    dp[i][0] = sum
  }

  sum = 0
  for (let i = 0; i < n; i++) {
    sum += grid[0][i]
    dp[0][i] = sum
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[m - 1][n - 1]
};
// @lc code=end

