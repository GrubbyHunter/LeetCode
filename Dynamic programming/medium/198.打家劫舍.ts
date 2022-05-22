/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }

  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])


  for (let i = 2; i < nums.length; i++) {
    // 上一个最大值 or 上上一个最大值与当前金额的和
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[nums.length - 1]
};
// @lc code=end

