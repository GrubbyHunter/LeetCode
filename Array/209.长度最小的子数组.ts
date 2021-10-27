/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0
  let right = 0
  let minSize = Number.MAX_VALUE
  let sum = 0

  // 使用双指针，外侧先移动又指针
  for (; right < nums.length; right++) {
    // 记录当前总和
    sum = sum + nums[right]

    // 总和超过target，开始移动左指针
    while (sum >= target) {
      // 当前区间的元素个数
      let size = right - left + 1
      sum = sum - nums[left]
      // 比较当前是否是最小长度，是的话就记录
      minSize = minSize > size ? size : minSize
      // 移动左指针
      left++
      // 总长度减1
      size--
    }
  }
  // 当前如果minSize 依然是最大值，说明没有适合的区间，直接返回0
  return minSize === Number.MAX_VALUE ? 0 : minSize
};
// @lc code=end

