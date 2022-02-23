/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  let result = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    // 当i大于n/2后，也就是遍历过了一半
    // result[i]实际上已经记录了i右边的乘积
    // 再乘以左边的乘积，即等于数组中除他本身以外的乘积
    result[i] = result[i] * left;
    // 计算i的左边的乘积
    left = left * nums[i];

    // 当i大于n/2后，也就是遍历过了一半
    // result[n - 1 - i]实际上已经记录了i左边的乘积
    // 再乘以右边的乘积，即等于数组中除他本身以外的乘积
    result[n - 1 - i] = result[n - 1 - i] * right;
    // 计算i右边的乘积
    right = right * nums[n - 1 - i];
  }

  return result;
}
// @lc code=end
