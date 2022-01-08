/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  let dp = new Array(nums.length).fill(1)
  let max = 1
  dp[0] = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1
    } else {
      dp[i] = 1
    }
    max = Math.max(dp[i], max)
  }

  return max
};
// @lc code=end

