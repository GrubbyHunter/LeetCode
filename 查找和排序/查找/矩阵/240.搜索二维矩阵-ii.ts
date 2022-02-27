/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let i = matrix.length - 1
  let j = 0

  // 左下角第一个元素是当前列最大元素，也是当前行最小元素
  while (i >= 0 && j < matrix[0].length) {
    // 找到目标值
    if (matrix[i][j] === target) {
      return true
    }

    // 大于目标值，元素不在第i行（最后一行）
    if (matrix[i][j] > target) {
      // 缩小范围
      i--
      continue
    }

    // 小于目标值，元素不在第j列（第一列）
    // 缩小范围
    j++
  }


  // 不断缩小范围，依然找不到，返回false
  return false
};
// @lc code=end

