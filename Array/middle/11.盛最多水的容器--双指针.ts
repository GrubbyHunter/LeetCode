/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  // 使用双指针解法
  let left = 0
  let right = height.length - 1
  let max = 0

  while (left < right) {
    let h = 0
    // 宽度
    let w = right - left

    // 使用较矮的高度畸形计算面积
    if (height[left] > height[right]) {
      h = height[right]
      right--
    } else {
      h = height[left]
      left++
    }

    // 宽乘以高
    max = Math.max(max, h * w)
  }

  return max
};
// @lc code=end

