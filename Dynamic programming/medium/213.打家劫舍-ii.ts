/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  let len = nums.length
  if (len === 1) {
    return nums[0]
  }

  if (len === 2) {
    return Math.max(nums[0], nums[1])
  }

  // dp[i]表示偷到第i家能偷到的最大值
  let dp = new Array(len).fill(0)
  // 记录最大值
  let max = 0

  // 分为偷最后一家和不偷最后一家两种情况

  // 一、不偷最后一家，那么从第1家开始计算
  dp[0] = nums[0]
  dp[1] = Math.max(dp[0], dp[1])
  // 遍历到倒数第二家
  for (let i = 2; i < len - 1; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  max = dp[len - 2]

  // 二、偷最后一家，那么第一家不能偷，那么从第2家开始计算
  // 重新初始化dp
  dp = new Array(len).fill(0)
  dp[0] = 0 // 不偷第1家，所以是0
  dp[1] = nums[1]
  // 一直遍历到结尾
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  // 比较两种情况，获取比较大的那个值
  return Math.max(max, dp[nums.length - 1])
};
// @lc code=end

