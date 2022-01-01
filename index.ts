/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }

  let dp: any = new Array(nums.length).fill(0)
  let max = 0
  dp[0] = nums[0]
  dp[1] = Math.max(nums[1], nums[0])

  for (let i = 2; i < nums.length - 1; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }

  max = dp[nums.length - 2]
  dp = new Array(nums.length).fill(0)
  dp[0] = 0
  dp[1] = nums[1]

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }

  return Math.max(max, dp[nums.length - 1])
};

rob([4, 1, 2, 7, 5, 3, 1])
// @lc code=end

