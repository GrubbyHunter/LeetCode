/*
 * @lc app=leetcode.cn id=1288 lang=typescript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
function removeCoveredIntervals(intervals: number[][]): number {
  // 先按照左侧位置进行升序排序,
  // 如果左边一样，排序时候右侧较大的放前面
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    }
    return b[1] - a[1]
  })
  let count = 0

  let end = intervals[0][1]


  for (let i = 1; i < intervals.length; i++) {
    // 排序时右侧较大的在前面
    // 左侧相同时直接比较右边
    // 右边比当前区间大，则是完全覆盖当前区间
    if (end >= intervals[i][1]) {
      count++
    } else {
      end = intervals[i][1]
    }
  }
  return intervals.length - count
};
// @lc code=end

