/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
function findLength(nums1: number[], nums2: number[]): number {
  // dp[i][j]的定义为nums1以当前i-1结尾，nums2以当前j-1结尾的长度中最长重复子数组长度
  let dp: any = new Array(nums1.length + 1).fill(0).map(() => new Array(nums2.length + 1).fill(0))
  let max = 0

  // 此题也是正常的dp公式，但是，初始化和dp公式是在一起的
  // 因为判断两数组的的相同元素，每次都是从下标为0开始的
  // 所以为了方便基数i-1和j-1，数组扩充长度1
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      // 如果相等，则是分别上一个范围的最大子数组长度+1
      // 如果长度不相等，相当于统计最大长度断开了
      // dp的子元素初始化都是0，碰到不相等的，然后与下一个相等, 相当于重新计算0+1 = 1
      if (nums1[i - 1] === nums2[j - 1]) {
        // dp[i-1][j-1]记录两个中每个数组的前i-1个数和j-1个数重复序列长度
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      max = Math.max(max, dp[i][j])
    }
  }

  return max
};
// @lc code=end

