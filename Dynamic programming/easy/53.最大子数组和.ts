/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // dp[i]的定义：以i为结尾的最大连续子序列和

  let dp = new Array(nums.length).fill(0)
  let max = nums[0]

  dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    // 之前i-1的和是负数，负数加上当前数肯定越加越小，所以dp[i]直接等于当前数
    // 相当于负数把整个数组分成一段一段
    if (dp[i - 1] < 0) {
      dp[i] = nums[i]
    } else {
      // 前面的和为正数，继续累加
      dp[i] = dp[i - 1] + nums[i]
    }
    // 以最后一个数字为结尾的连续子序列和不一定是最大的
    // 最大和可能只是其中的一段子序列，所以需要一个max
    max = Math.max(max, dp[i])
  }


  return max
}
// @lc code=end
