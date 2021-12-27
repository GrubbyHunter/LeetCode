/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  // 生成一个m行n列的二维数组，每个元素填充1
  // 这里实际上只填充，第一行和第一列就可以
  // 因为同一行 or 同一列只有一种走法
  // 其他的点根据dp公式后面会update
  let dp: any = new Array(m).fill(1).map(() => new Array(n).fill(1))

  let i = 1
  while (i < m) {
    let j = 1

    while (j < n) {
      // 递归填充二维数组
      // 第行第j列的走法数 = 他左边的点[i][j - 1]走法数 + 他上面的点 dp[i - 1][j]走法数 
      // 因为只有这两个点能最终走到 [i, j]这个点
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      j++
    }
    i++
  }

  // 计算m,n点因为是数组下标，所以需要-1
  return dp[m - 1][n - 1]
};
// @lc code=end

