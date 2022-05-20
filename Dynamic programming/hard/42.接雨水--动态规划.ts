/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  const len = height.length;

  if (len <= 2) return 0;
  // 每个柱子左边最大高度
  const leftHegihtArr = new Array(len).fill(0);
  // 每个柱子右边最大高度
  const rightHegihtArr = new Array(len).fill(0);

  let maxLeft = height[0]
  for (let i = 1; i < len; i++) {
    // 当前高度的前一个高度与左边做大高度比较，或取较大值
    maxLeft = Math.max(height[i - 1], maxLeft)

    leftHegihtArr[i] = maxLeft
  }

  let maxRight = height[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    // 当前高度的前一个高度与左边做大高度比较，或取较大值
    maxRight = Math.max(height[i + 1], maxRight)

    rightHegihtArr[i] = maxRight
  }

  let sum = 0
  // 第一个和最后一个不统计，因为接不到雨水
  for (let i = 1; i < len - 1; i++) {
    // 取左右两边高度较小值
    let size = Math.min(leftHegihtArr[i], rightHegihtArr[i]) - height[i]
    // 大于零说明两边都比当前高度高，可以接雨水
    if (size > 0) sum += size
  }

  return sum;
};
// @lc code=end

