/*
 * @lc app=leetcode.cn id=289 lang=typescript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  let row = board.length
  let col = board[0].length

  // 修改状态
  const changStatus = (i: number, j: number) => {
    // 当前细胞的状态
    let status = board[i][j]
    let aliveCount = 0

    for (let m = -1; m <= 1; m++) {
      for (let n = -1; n <= 1; n++) {
        // 排除它本身
        if (m === 0 && n === 0) {
          continue
        }

        let x = m + i
        let y = n + j

        // 下标越界
        if (x < 0 || y < 0 || x > row - 1 || y > col - 1) {
          continue
        }
        // 旁边相邻的为活细胞，3是1=>3,之前是活细胞
        if (board[x][y] === 1 || board[x][y] === 3) {
          aliveCount++
        }
      }
    }

    // 当前是活细胞
    if (status === 1) {
      if (aliveCount > 3 || aliveCount < 2) {
        // 原先是1，这里变成了死细胞，暂时设置为3，也就是1=>3
        board[i][j] = 3
      }
    } else {
      // 当前是死细胞
      if (aliveCount === 3) {
        // 原先是0，这里变成了活细胞，暂时设置为2，也就是0=>2
        board[i][j] = 2
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      changStatus(i, j)
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 1=>3 活细胞变死细胞的，将标记的值设置为正确的值
      if (board[i][j] === 3) {
        board[i][j] = 0
      }
      // 0=>2 死细胞变活细胞的，将标记的值设置为正确的值
      if (board[i][j] === 2) {
        board[i][j] = 1
      }
    }
  }
};
// @lc code=end

