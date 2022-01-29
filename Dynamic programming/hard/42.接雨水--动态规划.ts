/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  let size = height.length
  // dp[i]的定义为当前i元素最左边 or 最右边的高度为dp[i]
  let dpLeftHeight = new Array(size).fill(0)
  let dpRightHeight = new Array(size).fill(0)
  let result = 0

  // 这里有点类似双指针解法，但是双指针里面有重复计算
  // 这里通过动态规划，或者说是数组记录之前最高的列么相当于是空间换时间
  dpLeftHeight[0] = height[0]
  for (let i = 1; i < size; i++) {
    dpLeftHeight[i] = Math.max(height[i - 1], dpLeftHeight[i - 1])
  }

  dpLeftHeight[size - 1] = height[size - 1]
  for (let i = size - 2; i >= 0; i--) {
    dpRightHeight[i] = Math.max(height[i + 1], dpRightHeight[i + 1])
  }

  // 这里第一二元素和最后一个元素不计算容积，因为无法存储雨水
  for (let i = 1; i < size - 1; i++) {
    // 取左右高度中的较小值
    let h = Math.min(dpLeftHeight[i], dpRightHeight[i])
    // 较小值大于当前高度，name两个高度都大于当前高度
    if (h > height[i]) {
      // 高乘以宽 == 当前列容积
      result += (h - height[i]) * 1
    }
  }

  return result
};
// @lc code=end

