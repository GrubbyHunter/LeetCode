/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

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

    // 遍历下边，增加条件up <= down，避免数组越界
    for (let i = r; i >= l && up <= down; i--) {
      result.push(matrix[down][i])
    }
    down--

    // 遍历左边，增加条件l <= r，避免数组越界
    for (let i = down; i >= up && l <= r; i--) {
      result.push(matrix[i][l])
    }
    l++
  }

  return result
};
// @lc code=end

