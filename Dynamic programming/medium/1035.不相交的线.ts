/*
 * @lc app=leetcode.cn id=1035 lang=typescript
 *
 * [1035] 不相交的线
 */

// @lc code=start
function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  let dp = new Array(nums1.length + 1)
    .fill(0).map(() => new Array(nums2.length + 1).fill(0))

  // 画一下连接线，发现此题类似最长公共子序列，写法与1143题一致
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[nums1.length][nums2.length]
};
// @lc code=end

