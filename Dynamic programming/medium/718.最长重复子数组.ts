/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
function findLength(nums1: number[], nums2: number[]): number {
  let dp: any = new Array(nums1.length + 1).fill(0).map(() => new Array(nums2.length + 1).fill(0))
  let max = 0

  // 此题也是正常的dp工时，但是，初始化和dp公式是在一起的
  // 因为判断两数组的的相同元素，每次都是从下标为0开始的
  // 所以为了方便基数i-1和j-1，数组扩充长度1
  for (let i = 1; i < nums1.length + 1; i++) {
    for (let j = 1; j < nums2.length + 1; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        // dp[i-1][j-1]记录两个中每个数组的前i-1个数和j-1个数重复序列长度
        dp[i][j] = dp[i - 1][j - 1] + 1
        // 记录最大值
        max = Math.max(dp[i][j], max)
      }
    }
  }

  return max
};
// @lc code=end

