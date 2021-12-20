/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function eraseOverlapIntervals(intervals: number[][]): number {
  let count = 1

  intervals.sort((a: number[], b: number[]): number => {
    return a[1] - b[1]
  })

  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {

    if (end <= intervals[i][0]) {
      end = intervals[i][0]
      count++
    }
  }

  return intervals.length - count
};
eraseOverlapIntervals([[-52, 31], [-73, -26], [82, 97], [-65, -11], [-62, -49], [95, 99], [58, 95], [-31, 49], [66, 98], [-63, 2], [30, 47], [-40, -26]])
// @lc code=end

