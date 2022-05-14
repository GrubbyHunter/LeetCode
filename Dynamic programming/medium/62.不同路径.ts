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

  // 横纵坐标起始都是1，从第2行第2列开始遍历
  let i = 1
  while (i < m) {
    let j = 1

    while (j < n) {
      // 到达当前位置存在的种数等于他左边节点到他的种数和他上面节点到他的种数
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      j++
    }

    i++
  }

  return dp[m - 1][n - 1]
};
// @lc code=end

