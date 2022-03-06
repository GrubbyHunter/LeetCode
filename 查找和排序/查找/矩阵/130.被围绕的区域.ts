/*
 * @lc app=leetcode.cn id=130 lang=typescript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  let row = board.length
  let col = board[0].length

  // 深度递归，从最外层的边上的节点出发
  // 找到能直连(与他相邻)，或者间接链接(与他相邻元素相邻)
  const dfs = (i: number, j: number): void => {
    // 数组下标越界
    if (i < 0 || i >= row || j < 0 || j >= col) {
      return
    }
    // 当前不等于O，无法继续延伸
    if (board[i][j] !== "O") {
      return
    }

    // 找到能跟最外层边上连接的节点，标记为A
    board[i][j] = "A"
    // 往上下左右四个方向继续寻找
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }

  // 深度递归遍历第一列，最后一列
  for (let i = 0; i < row; i++) {
    dfs(i, 0)
    dfs(i, col - 1)
  }

  // 深度递归遍历第一行，最后一行
  for (let i = 0; i < col; i++) {
    dfs(0, i)
    dfs(row - 1, i)
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 标记为A的坐标都是与最外边相连的，不需要处理的节点，需要重置为O
      if (board[i][j] === "A") {
        board[i][j] = "O"
      } else if (board[i][j] === "O") {
        // 剩下的O都是无法连接到边上的O，也就是被包围的O
        // 需要设置为X
        board[i][j] = "X"
      }
    }
  }
};
// @lc code=end

