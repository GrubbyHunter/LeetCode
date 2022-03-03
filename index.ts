// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  let m = matrix.length
  let n = matrix[0].length
  let result = []
  let l = 0, r = n - 1, up = 0, down = m - 1

  while (l <= r && up <= down) {
    // 遍历上面
    for (let i = l; i <= r; i++) {
      result.push(matrix[up][i])
    }
    // 上边遍历完 up加1
    up++

    // 遍历右边
    for (let i = up; i <= down; i++) {
      result.push(matrix[i][r])
    }
    // 遍历完右边 r-1
    r--

    // 遍历下边
    for (let i = r; i >= l; i--) {
      result.push(matrix[down][i])
    }
    down--

    // 遍历左边
    for (let i = down; i >= up; i--) {
      result.push(matrix[i][l])
    }
    l++
  }

  return result
};
spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])