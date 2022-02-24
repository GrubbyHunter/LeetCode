/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  let imax = 1;
  let imin = 1;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    // nums[i] 小于0，最大数变最小数，最小数变最大数，因为负数越乘越小
    if (nums[i] < 0) {
      [imax, imin] = [imin, imax];
    }

    // 由于是连续的乘积，这里如果之前的乘积最大值 * 当前数 小于当前数，那么最大就是当前数，需要从当前数开始计算
    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);

    // 累计统计最大值
    max = Math.max(imax, max);
  }

  return max;
}
// @lc code=end
