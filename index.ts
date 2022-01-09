/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function findLength(nums1: number[], nums2: number[]): number {
  let dp: any = new Array(nums1.length + 1).fill(0).map(() => new Array(nums2.length + 1).fill(0))
  let max = 0

  for (let i = 1; i < nums1.length + 1; i++) {
    for (let j = 1; j < nums2.length + 1; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, max)
        max = dp[i][j]
      }
    }
  }

  return max
};
findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])
// @lc code=end

