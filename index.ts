/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
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
      minSize = minSize > size ? size : minSize
      left++
      size--
    }

  }

  return min
};
let result = minSubArrayLen(7, [2, 3, 1, 2, 4, 3])

// @lc code=end

