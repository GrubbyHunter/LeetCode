/*
 * @lc app=leetcode.cn id=378 lang=typescript
 *
 * [378] 有序矩阵中第 K 小的元素
 */

// @lc code=start
function kthSmallest(matrix: number[][], k: number): number {
  let x = matrix.length
  let y = matrix[0].length

  if (k === 1) {
    return matrix[0][0]
  }

  if (k === x * y) {
    return matrix[x - 1][y - 1]
  }

  // 获取矩阵中小于等于mid的元素数量
  const getMinCount = (mid: number): number => {
    let row = x - 1
    let col = 0
    let count = 0

    while (row >= 0 && col < y) {
      // 直接从第一列最后一个元素开始比较
      // 如果他小于mid，那么他前面的第一列所有元素也都小于mid
      if (matrix[row][col] <= mid) {
        // 这一列都小于mid，count要加上这一列的数量（row+1）
        count += row + 1
        // 然后继续从第二列开比较
        col++
      } else {
        // 如果小于mid，name回退到上一行继续比较
        row--
      }
    }

    return count
  }
  let min = matrix[0][0]
  let max = matrix[x - 1][y - 1]

  while (min < max) {
    let mid = Math.floor((min + max) / 2)
    let count = getMinCount(mid)
    // min到mid之间的元素小于K个，那么第k小元素在mid+1到max之间
    if (count < k) {
      // 重新设置min，继续计算
      min = mid + 1
    } else {
      // 大于k个，那么第k小元素在min到mid之间
      // 由于getMinCount里面判断条件matrix[row][col] <= mid
      // 等于也算进去了，所以count===k的情况，也算了count个数
      // 第k小元素在min到mid之间
      max = mid
    }
  }

  // 由于通过count计算，第k小元素一直在min-max之间
  // 所以遍历完成 min===max时候，第k小元素就是max or min
  return max
};
// @lc code=end

