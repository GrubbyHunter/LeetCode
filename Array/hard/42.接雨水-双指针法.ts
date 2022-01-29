/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  let result = 0

  for (let i = 0; i < height.length; i++) {
    // 第一个元素和最后一个元素无法存储雨水
    if (i === 0 || i === height.length - 1) {
      continue
    }

    // 当前元素的左边指针，左边的最高元素
    let left = 0
    for (let j = 0; j < i; j++) {
      left = Math.max(left, height[j])
    }

    // 当前元素的右边指针，右边的最高元素
    let right = 0
    for (let j = i + 1; j < height.length; j++) {
      right = Math.max(right, height[j])
    }

    // 去两侧高中较小值
    let h = Math.min(left, right)
    // 左边和右边都比当前元素高
    if (h > height[i]) {
      // 取左右较低值减去当前高度，即为当前列存储量，这里乘以1是为了方便理解，高 * 宽 === 容积
      result += (h - height[i]) * 1
    }
  }

  return result
};
// @lc code=end

