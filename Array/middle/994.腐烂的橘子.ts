/*
 * @lc app=leetcode.cn id=994 lang=typescript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
function orangesRotting(grid: number[][]): number {
  let sum = 0 // 统计总数
  let minute = -1 // 因为第一次遍历腐烂的橘子队列不统计时间，所以设置为-1，少算一分钟
  let queue: number[][] = [] // 统计当前层
  let m = grid.length, n = grid[0].length

  const handleItem = (x: number, y: number) => {
    // 下标越界
    if (x < 0 || x > m - 1 || y < 0 || y > n - 1) {
      return
    }

    // 将未污染的进行污染
    if (grid[x][y] === 1) {
      grid[x][y] = 2
      // 新污染的放入队列，下一分钟进行污染
      queue.push([x, y])
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 统计橘子总数，包括腐烂和未腐烂
      if (grid[i][j] !== 0) {
        sum++
      }
      // 将初始化时候腐烂的橘子放入队列
      if (grid[i][j] === 2) {
        queue.push([i, j])
      }
    }
  }

  // 没有橘子，直接返回0
  if (sum === 0) {
    return 0
  }

  while (queue.length > 0) {
    let currentLength = queue.length
    // 每分钟污染当前队列
    minute++
    for (let i = 0; i < currentLength; i++) {
      let cur: any = queue.shift() // 删除前一次放入的腐烂橘子 0 到 currentLength
      let curX = cur[0]
      let curY = cur[1]

      // 污染和未污染的都在队列中，橘子总数-1
      sum--
      // 处理上下左右四个方向
      handleItem(curX - 1, curY)
      handleItem(curX + 1, curY)
      handleItem(curX, curY - 1)
      handleItem(curX, curY + 1)
    }
  }
  return sum > 0 ? -1 : minute
};
// @lc code=end

