/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length

  // 生成 m行n列的二维数组
  let dp: any = new Array(m).fill(0).map(() => new Array(n).fill(0))

  // 初始化第一列，碰到障碍物之前的数值都是 1
  // 因为只能向下或者向右走，障碍物之下都是0
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      // 碰到障碍物，直接break跳出循环，后续的都是0
      break
    }
    dp[i][0] = 1
  }

  // 初始化第一行，碰到障碍物之前的数值都是 1
  // 因为只能向下或者向右走，障碍物之右都是0
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      break
    }
    dp[0][j] = 1
  }

  // 依旧从第二行和第二列还是动态规划递推
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        // 碰到障碍物，直接设置为0
        dp[i][j] = 0
        continue
      }
      // 动态规划公式：当前节点 = 左边数量 + 上边数量
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
};

uniquePathsWithObstacles([[1, 0]])
// @lc code=end

