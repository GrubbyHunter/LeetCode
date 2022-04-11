/*
 * @lc app=leetcode.cn id=918 lang=typescript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
function maxSubarraySumCircular(nums: number[]): number {
  // 记录最大的和
  let max = Number.MIN_SAFE_INTEGER
  // 记录最小的和
  let min = Number.MAX_SAFE_INTEGER
  let sum = 0
  let currentMax = 0
  let currentMin = 0

  for (let i = 0; i < nums.length; i++) {
    // 累积和
    sum += nums[i]
    currentMax = currentMax + nums[i]
    currentMin = currentMin + nums[i]
    // 当前和超过最大和，重置最大和
    if (currentMax > max) {
      max = currentMax
    }
    // 当前和小于最小和，重置最小和
    if (currentMin < min) {
      min = currentMin
    }

    // 当前和小于0，那么后面的数加上当前和会变小
    if (currentMax < 0) {
      // 所以后面数要舍弃当前和单独统计，当前和重置为0
      // 相当于负数将连续数组的和分隔开
      currentMax = 0
    }

    // 当前和大于0，那么后面的数加上当前和会变大
    if (currentMin > 0) {
      // 所以后面数要舍弃当前和单独统计，当前和重置为0
      // 相当于正数将连续数组的和分隔开
      currentMin = 0
    }
  }

  // 如果最大和小于0，说明数组中一个正数也没有，直接取最大的那个数max即可
  // 如果最大和大于0，存在两种情况：
  // 1、一种是最大的连续和在数组的中间，没有被分割，这时候就是max
  // 2、另一种是最大的连续和被分割（即数组的头部一部分+尾部一部分形成最大和），就是sum - min
  //    为什么是sum - min，因为sum整个数组的和，而min是数组中的负数，他将头和尾分隔开。所以要减去min
  // 例如 [5,-3,5],结果解释5-3+5 = 7， min = -3， 7 - (-3) = 10
  return max > 0 ? Math.max(max, sum - min) : max;
};
// @lc code=end

