// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
function searchMatrix(matrix: number[][], target: number): boolean {
  let i = matrix.length - 1

  // 左下角第一个元素是当前列最大元素，也是当前行最小元素
  // 所以先通过每一列第一个元素确定target在哪一行
  while (matrix[i][0] > target && i >= 0) {
    i--
  }

  // 越界，比matrix[0][0]还小
  if (i < 0) {
    return false
  }

  // 找到哪一行后，遍历当前行找到是否属于此行
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] === target) {
      return true
    }
  }

  // 当前行找不到，则不存在
  return false
};// @lc code=end
searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5)