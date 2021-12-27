/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function uniquePaths(m: number, n: number): number {
  // 使用map是为了避免引用传递，生成都是独立的对象
  // 生成一个m行n列，并且每个元素都是1的二维数组
  let dp = new Array(m).fill(1).map(() => new Array(n).fill(1))

  let i = 1
  while (i < m) {
    let j = 1

    while (j < n) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      j++
    }
    i++
  }


  return dp[m - 1][n - 1]
};
uniquePaths(3, 7)
// @lc code=end

