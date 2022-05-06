/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index = m + n - 1

  for (let i = index; i >= 0; i--) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      if (m > 0) {
        nums1[i] = nums1[m - 1]
        m--
      }
    } else {
      if (n > 0) {
        nums1[i] = nums2[n - 1]
        n--
      }
    }
  }
};
// @lc code=end

