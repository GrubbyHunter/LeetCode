/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  // 统计已经访问过得位置
  let visited = new Array(board.length)
    .fill(false)
    .map(() => new Array(board[0].length).fill(false));

  // x，y坐标的边界
  let maxX = board.length - 1;
  let maxY = board[0].length - 1;

  // str：没有比较过的字符串，x/y：上一个比较过的位置
  const backTracking = (str: string, x: number, y: number): boolean => {
    // str为空，已找完，返回true
    if (!str) {
      return true;
    }

    // 当前下标越界或者当前位置已经被访问过
    if (x < 0 || x > maxX || y < 0 || y > maxY || visited[x][y]) {
      return false;
    }

    let letter = str.substring(0, 1);

    // 当前位置不等于当前字母
    if (board[x][y] !== letter) {
      return false;
    }

    // 当前位置等于当前字母，记录为已访问
    visited[x][y] = true;

    // 同时往上下左右方向继续找
    if (
      backTracking(str.substring(1), x + 1, y) ||
      backTracking(str.substring(1), x, y + 1) ||
      backTracking(str.substring(1), x - 1, y) ||
      backTracking(str.substring(1), x, y - 1)
    ) {
      return true;
    }

    // 上下左右方向没找到，回溯为未访问
    visited[x][y] = false;

    // 返回false
    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        // 找到起始位置，开始递归
        if (backTracking(word, i, j)) {
          return true;
        }
      }
    }
  }

  return false;
}
// @lc code=end
