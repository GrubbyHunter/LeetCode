// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
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
    if (!word) {
      return true;
    }

    let letter = str.substring(0, 1);

    if (x + 1 <= maxX && !visited[x + 1][y]) {
      if (board[x + 1][y] === letter) {
        visited[x + 1][y] = true;
        if (backTracking(str.substring(1), x + 1, y)) {
          return true;
        }
        visited[x + 1][y] = false;
      }
    }

    if (y + 1 <= maxY && !visited[x][y + 1]) {
      if (board[x][y + 1] === letter) {
        visited[x][y + 1] = true;
        if (backTracking(str.substring(1), x, y + 1)) {
          return true;
        }
        visited[x][y + 1] = false;
      }
    }

    if (x - 1 >= 0 && !visited[x - 1][y]) {
      if (board[x - 1][y] === letter) {
        visited[x - 1][y] = true;
        if (backTracking(str.substring(1), x - 1, y)) {
          return true;
        }
        visited[x - 1][y] = false;
      }
    }

    if (y - 1 >= 0 && !visited[x][y - 1]) {
      if (board[x][y - 1] === letter) {
        visited[x][y - 1] = true;
        if (backTracking(str.substring(1), x, y - 1)) {
          return true;
        }
        visited[x][y - 1] = false;
      }
    }

    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        visited[i][j] = true;
        if (backTracking(word.substring(1), i, j)) {
          return true;
        }
        visited[i][j] = false;
      }
    }
  }

  return false;
}
exist(
  [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  "ABCCED"
);
// @lc code=end
