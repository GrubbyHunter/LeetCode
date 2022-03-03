/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let first_row_zero = false
  let first_col_zero = false

  // 判断第一行是否存在0
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      first_row_zero = true
      break
    }
  }

  // 判断第一列是否存在0
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      first_col_zero = true
      break
    }
  }

  //从第2行第2列开始遍历，初始化第一行和第一列的数据
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        // 如果当前位置为0
        // 那么将第1列与他同行的元素设置为0
        matrix[i][0] = 0
        // 那么将第1行与他同列的元素设置为0
        matrix[0][j] = 0
      }
    }
  }

  // 使用第一行和第一列作为依据，初始化除第一行第一列以外的其他数据
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      // 第一行 or 第一列中有与当前元素同行的，而且为0
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        // 当前元素设置为0
        matrix[i][j] = 0
      }
    }
  }
  // 第一行本身存在0，全部初始化为0
  if (first_row_zero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0
    }
  }

  // 第一列本身存在0，全部初始化为0
  if (first_col_zero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0
    }
  }
};
// @lc code=end

