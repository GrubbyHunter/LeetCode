/*
 * @lc app=leetcode.cn id=673 lang=typescript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
function findNumberOfLIS(nums: number[]): number {
  if (nums.length <= 1) {
    return 1
  }

  // 从0到i的最长子序列长度为dp[i]
  let dp = new Array(nums.length).fill(1)
  // 从0到i的最长子序列个数为count[i]
  let count = new Array(nums.length).fill(1)
  // 最长子序列长度
  let maxLength = 0
  let result = 0

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 下标i的值大于下标j的值
      if (nums[i] > nums[j]) {
        // 当前数i正好比j大一个，所以依然是递增子序列，count[i]和count[j]记录的属于同一个递增子序列
        if (dp[j] + 1 > dp[i]) {
          count[i] = count[j]
        } else if (dp[j] + 1 === dp[i]) {
          // 0到i的最长子序列与0到j的最长子序列+1相等
          // 说明0到j加上1（count[j]）和0-i(conut[i])不属于同一种情况
          // 所以原先的count[i]需要把count[j]里面的统计的个数也累加进去
          // 因为count[j] 是 0-j范围，也属于0-i范围
          count[i] += count[j]
        }
        // 那么i的长度实际上可以在j的长度，也就是dp[j]上 + 1，同时与他本身长度比较，取较大值
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }

    // 统计最长自序列长度
    maxLength = Math.max(maxLength, dp[i])
  }

  for (let i = 0; i < count.length; i++) {
    // 当前最长子序列长度与整个的子序列长度相等，那就是最大长度，需要统计他的个数
    if (dp[i] === maxLength) {
      result += count[i]
    }
  }
  return result
};
// @lc code=end

