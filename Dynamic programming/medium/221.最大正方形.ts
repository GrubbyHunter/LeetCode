/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
  // dp[i][j]的定义式，从0,0到坐标为i,j的点，处在的最大正方形的边长
  let dp = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(0));

  let maxSize = 0;
  // 初始化每一行的第一个元素
  for (let i = 0; i < matrix.length; i++) {
    dp[i][0] = matrix[i][0] === "1" ? 1 : 0;
    maxSize = Math.max(maxSize, dp[i][0]);
  }

  // 初始化每一列的第一个元素
  for (let i = 0; i < matrix[0].length; i++) {
    dp[0][i] = matrix[0][i] === "1" ? 1 : 0;
    maxSize = Math.max(maxSize, dp[0][i]);
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      // 只处理1的部分
      if (matrix[i][j] === "1") {
        // 以坐标为i,j的点作为右下角的最大正方形
        // 边长取决于i,j的左边，上边以及左上边三个点作为右下角的最大正方形边长中的最小值
        // 如果三个点的边长都一致，说明最大正方形就缺这个i，j的右下角，直接+1
        // 如果边长不一致，说明左，上，左上的正方形存在缺失，需要取最小的 + 1
        // 参考图片 https://pic.leetcode-cn.com/8c4bf78cf6396c40291e40c25d34ef56bd524313c2aa863f3a20c1f004f32ab0-image.png
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
      maxSize = Math.max(maxSize, dp[i][j])
    }
  }

  return maxSize * maxSize;
}
// @lc code=end
