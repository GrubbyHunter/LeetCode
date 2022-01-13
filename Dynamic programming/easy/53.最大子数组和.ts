/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // dp[i]的定义为下表为i的前i个元素的最大子序列值和
  let dp = new Array(nums.length).fill(0);
  let max = nums[0];
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] < 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = nums[i] + dp[i - 1];
    }

    max = Math.max(dp[i], max);
  }
  // 这里结果不是dp数组最后一个，而是max
  // 因为dp[i]是记录的整个序列的最大值
  // 重要：而实际上连续子数组的最大值可能是整个序列的其中一小段
  return max;
}
// @lc code=end
