
// @lc code=start
function maxArea(height: number[]): number {
  // 使用双指针解法
  let left = 0
  let right = height.length - 1
  let max = 0

  while (left < right) {
    let h = 0
    let w = right - left

    if (height[left] > height[right]) {
      h = height[right]
      right--
    } else {
      h = height[left]
      left++
    }


    max = Math.max(max, h * w)
  }

  return max
};
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
// @lc code=end

