/*
 * @lc app=leetcode.cn id=1005 lang=typescript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
function largestSumAfterKNegations(nums: number[], k: number): number {
  let sum = 0

  // 首先按照绝对值降序排序树组
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))

  for (let i = 0; i < nums.length; i++) {
    // k的次数优先将绝对值较大的负数转化为证书
    if (nums[i] < 0 && k > 0) {
      nums[i] = - nums[i]
      k--
    }
  }

  // 剩下的次数是奇数，name需要将绝对值最小的数进行负数话
  if (k % 2 !== 0) {
    let lastIndex = nums.length - 1
    nums[lastIndex] = -nums[lastIndex]
  }

  // 累计求和
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }

  return sum
};
// @lc code=end

