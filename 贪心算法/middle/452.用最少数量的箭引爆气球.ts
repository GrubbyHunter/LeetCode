/*
 * @lc app=leetcode.cn id=452 lang=typescript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
function findMinArrowShots(points: number[][]): number {
  let count = 0
  // 将起始坐标从小到大排序
  points.sort((a, b) => a[0] - b[0])

  let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < points.length; i++) {
    // 最小值比区间最大值大，最大值比区间最小值小
    // 说明不在区间，需要重新设置区间
    if (points[i][0] > max || points[i][1] < min) {
      min = points[i][0]
      max = points[i][1]
      // 新区间需要使用以根新的箭
      count++
      continue
    }

    // 区间存在交集，需要计算交集区间
    // min为两个左边中较大的和max为两个右边中较小的
    min = points[i][0] >= min ? points[i][0] : min
    max = points[i][1] <= max ? points[i][1] : max
  }

  return count
};
// @lc code=end

