/*
 * @lc app=leetcode.cn id=695 lang=typescript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
  let max = 0

  const getSize = (i: number, j: number, sum: number): number => {
    // 下标越界
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
      return sum
    }

    if (grid[i][j] !== 1) {
      return sum
    }

    // 将1标记为2表示已经计算过
    grid[i][j] = 2
    sum = sum + 1

    sum = getSize(i + 1, j, sum)
    sum = getSize(i - 1, j, sum)
    sum = getSize(i, j + 1, sum)
    sum = getSize(i, j - 1, sum)
    return sum
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // 一个岛屿的起点，会将岛屿内所有的相连节点都设置为2，下次不会重复遍历到
      if (grid[i][j] === 1) {
        // 统计最大的面积
        max = Math.max(max, getSize(i, j, 0))
      }
    }
  }

  return max
};
// @lc code=end

