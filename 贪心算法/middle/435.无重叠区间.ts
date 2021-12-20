/*
 * @lc app=leetcode.cn id=435 lang=typescript
 *
 * [435] 无重叠区间
 */

// @lc code=start
function eraseOverlapIntervals(intervals: number[][]): number {
  let count = 0

  // 将数组按照左区间升序排序
  intervals.sort((a: number[], b: number[]): number => {
    return a[0] - b[0]
  })

  // 第一个区间的结尾
  let end = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    // 上一个区间的end > 当前区间的 start
    // 则当前区间与上一个区间发生了重叠
    if (end > intervals[i][0]) {
      //重叠的话就要取出一个区间
      // 优先去除end较小的，这样可以给右侧保留更多的空间
      end = Math.min(intervals[i][1], end)
      // 记录去除数量
      count++
    } else {
      // 不重叠，当前区间的右边界作为新的end
      end = intervals[i][1]
    }

  }
  // 总数 - 不重叠的区间数 = 需要减去的区间数
  return count
};
// @lc code=end

