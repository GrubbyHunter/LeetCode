/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  const result = []
  // 按照第一个元素，也就是左区间生序排
  intervals.sort((a, b) => a[0] - b[0])
  // 起始区间
  let start = intervals[0][0]
  let end = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    // 区间内，完全覆盖，忽略
    if (intervals[i][1] < end) {
      continue
    }

    // 区间不重合
    if (intervals[i][0] > end) {
      // 保存当前区间
      result.push([start, end])
      // 重置新的左右区间
      start = intervals[i][0]
      end = intervals[i][1]
      continue
    }

    // 区间有重合部分
    if (intervals[i][0] <= end) {
      // 重置end
      end = Math.max(intervals[i][1], end)
    }
  }

  // 保存最后一个区间
  result.push([start, end])

  return result
};
// @lc code=end

