/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  // dp[i]的含义是从0到下标为i的元素之间，他们的最长增长序列长度
  // 这里初始化填充0和1都可以，反正后面会被重新赋值
  let dp = new Array(nums.length).fill(1)
  let maxLength = 1

  // 第一个元素，长度为1的序列
  dp[0] = 1

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 这里如果j下标的数大于i下标的数
      // 说明下标i的数符合0-j的增长序列
      if (nums[i] > nums[j]) {
        // 需要比较当前0-i的增长序列长度和0-j的增长下标长度+1，+的1就是nums[i]
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    // 最外层通过for循环统计出0到每个元素的最长增长序列长度
    // 这一步，取其中的最大值
    maxLength = Math.max(dp[i], maxLength)
  }
  // 这里dp[dp.length-1]不一定是最大值，切记
  return maxLength
};
// @lc code=end

