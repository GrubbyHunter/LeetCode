/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  let m = grid.length, n = grid[0].length
  // 缓存数组，用来避免超时
  let cache = new Array(m).fill(-1).map(() => new Array(n).fill(-1))

  const backTracking = (x: number, y: number, aSum: number): number => {
    let down = Number.MAX_SAFE_INTEGER
    let right = Number.MAX_SAFE_INTEGER
    // 之前的和和加上当前的值
    let sum = aSum + grid[x][y]

    if (x === m - 1 && y === n - 1) {
      return sum
    }

    // 往下走的值
    if (x < m - 1) {
      // 已经计算过的点，直接拿来使用
      if (cache[x + 1][y] !== -1) {
        down = sum + cache[x + 1][y]
      } else {
        down = backTracking(x + 1, y, sum)
      }

    }
    // 往右走的值
    if (y < n - 1) {
      // 已经计算过的点，直接拿来使用
      if (cache[x][y + 1] !== -1) {
        right = sum + cache[x][y + 1]
      } else {
        right = backTracking(x, y + 1, sum)
      }
    }

    let result = Math.min(down, right)

    // 结果减去之前的和 === x,y坐标到右下角的和
    cache[x][y] = result - aSum

    // 取两者中较小值
    return result
  }

  return backTracking(0, 0, 0)
};
// @lc code=end

