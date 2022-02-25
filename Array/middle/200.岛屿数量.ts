/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  let count = 0
  // 将当前1的上下左右全部感染，变成2
  const dfs = (i: number, j: number) => {
    // 越界
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
      return
    }

    // 到达0或者2的边界
    if (grid[i][j] !== "1") {
      return
    }

    // 当前的 1 变成 2，以便下一次不会被遍历到
    grid[i][j] = "2"
    // 上下左右进行占有
    dfs(i - 1, j)
    dfs(i, j - 1)
    dfs(i + 1, j)
    dfs(i, j + 1)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j)
        count++
      }
    }
  };
  return count
}
// @lc code=end

