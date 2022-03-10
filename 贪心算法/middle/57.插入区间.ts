/*
 * @lc app=leetcode.cn id=57 lang=typescript
 *
 * [57] 插入区间
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  let i = 0
  let result = []
  let length = intervals.length

  // 比新区间左边还小的区间，直接推进新数组
  while (i < length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i])
    i++
  }

  let left = newInterval[0]
  let right = newInterval[1]
  // 跟新区间有重叠部分的区间，左边小于新区间右边
  while (i < length && intervals[i][0] <= right) {
    // 更新区间的两边范围
    left = Math.min(intervals[i][0], left)
    right = Math.max(intervals[i][1], right)
    i++
  }
  // 合并完成，添加到新数组
  result.push([left, right])

  // 处理右侧左边都比新区间的右侧大的位置
  for (; i < length; i++) {
    result.push(intervals[i])
  }

  return result
};
// @lc code=end

