// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
function numIslands(grid: string[][]): number {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "0") {
        continue
      }

      if (i === 0 && j === 0) {
        count++
        continue
      }

      if (i === 0) {
        if (j = grid[i].length - 1) {
          if (grid[i][j - 1] === "0" && grid[i + 1][j] === "0") {
            count++
          }
        } else {
          if (grid[i][j - 1] === "0") {
            count++
          }
        }
        continue
      }

      if (j === 0) {
        if (i === grid.length - 1) {
          if (grid[i - 1][j] === "0" && grid[i][j + 1] === "0") {
            count++
          }
        } else {
          if (grid[i - 1][j] === "0") {
            count++
          }
        }
        continue
      }

      if (grid[i - 1][j] === "0" && grid[i][j - 1] === "0") {
        count++
      }
    }
  };
  return count
}
numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]
)
// @lc code=end
