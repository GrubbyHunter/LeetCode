/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function findMinArrowShots(points: number[][]): number {
  let count = 0
  // 将起始坐标从小到大排序
  points.sort((a, b) => a[0] - b[0])

  let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < points.length; i++) {
    if (points[i][0] > max || points[i][1] < min) {
      min = points[i][0]
      max = points[i][1]
      count++
      continue
    }

    min = points[i][0] >= min ? points[i][0] : min
    max = points[i][1] <= max ? points[i][1] : max
  }

  return count
};
findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])
// @lc code=end

