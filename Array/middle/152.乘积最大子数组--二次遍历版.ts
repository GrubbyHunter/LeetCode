/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  let max = Number.MIN_SAFE_INTEGER;
  let a = 1;

  // 如果数组中有0，可以用0讲数组分成几段，然后分段统计最大乘积与0比较
  // 分成几段后，每段都是不包含0
  // 考虑数组中负数的个数
  // 1、如果为偶数，最大乘积就是所有数相乘
  // 2、如果为奇数，可以从左往右乘，到最后一个奇数之前最大值，跟从右往左乘，到最后一个奇数钱的最大值比较，得到最大

  // 从左往右计算累积乘积最大值
  for (let i = 0; i < nums.length; i++) {
    a = nums[i] * a;

    max = Math.max(a, max);

    // 当前数等于0，那么a回到1，继续从下一个数重新统计
    if (nums[i] === 0) {
      a = 1;
    }
  }

  // 重置a
  a = 1;
  // 从右往左计算累积乘积最大值
  for (let i = nums.length - 1; i >= 0; i--) {
    a = nums[i] * a;

    max = Math.max(a, max);

    // 当前数等于0，那么a回到1，继续从下一个数重新统计
    if (nums[i] === 0) {
      a = 1;
    }
  }

  return max;
}
// @lc code=end
