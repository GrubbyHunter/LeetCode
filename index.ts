// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
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
      // "0" 的边长都是0，不用计算
      if (matrix[i][j] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
      maxSize = Math.max(maxSize, dp[i][j]);
    }
  }

  return maxSize * maxSize;
}
maximalSquare([
  ["0", "1"],
  ["1", "0"],
]);
// @lc code=end
