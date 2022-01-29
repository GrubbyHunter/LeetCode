/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  const len = height.length;
  if (len <= 2) return 0;
  const maxLeft = new Array(len).fill(0);
  const maxRight = new Array(len).fill(0);
  // 记录每个柱子左边柱子最大高度
  maxLeft[0] = height[0];
  for (let i = 1; i < len; i++) {
    maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
  }
  // 记录每个柱子右边柱子最大高度
  maxRight[len - 1] = height[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    maxRight[i] = Math.max(height[i], maxRight[i + 1]);
  }
  // 求和
  let sum = 0;
  for (let i = 0; i < len; i++) {
    let count = Math.min(maxLeft[i], maxRight[i]) - height[i];
    if (count > 0) sum += count;
  }
  return sum;
};
trap([2, 1, 3])
// @lc code=end


// @lc code=end
