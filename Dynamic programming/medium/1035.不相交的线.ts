/*
 * @lc app=leetcode.cn id=1035 lang=typescript
 *
 * [1035] 不相交的线
 */

// @lc code=start
function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  // dp[i][j]的定义为0到i-1和0到j-1长度的不相交的线条数
  let dp = new Array(nums1.length + 1)
    .fill(0).map(() => new Array(nums2.length + 1).fill(0))

  // 画一下连接线，发现此题类似最长公共子序列，写法与1143题一致
  // 循环从1开始计算，方便统计
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }

  return dp[nums1.length][nums2.length]
};
// @lc code=end

