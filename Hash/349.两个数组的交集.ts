/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  let result = {}
  let arr = []
  for (let i = 0; i < nums1.length; i++) {
    result[nums1[i]] = 1
  }

  for (let i = 0; i < nums2.length; i++) {
    if (result[nums2[i]] === 1) {
      result[nums2[i]]++
    }
  }

  for (let key in result) {
    if (result[key] === 2) {
      arr.push(key)
    }
  }

  return arr
};
// @lc code=end

