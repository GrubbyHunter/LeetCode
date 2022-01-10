/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
function findLength(nums1: number[], nums2: number[]): number {
  // 比较两个数组从指定下标，到指定长度存在的重复子数组长度
  const maxLength = (a: number[], b: number[], indexA: number, indexB: number, length) => {
    let max = 0
    let count = 0

    for (let i = 0; i < length; i++) {
      if (a[i + indexA] === b[i + indexB]) {
        count++
      } else {
        count = 0
      }
      max = Math.max(count, max)
    }

    return max
  }

  const getMax = (a: number[], b: number[]) => {
    // a是长度较小的那个数组
    let lengthA = a.length
    let lengthB = b.length
    let max = 0

    // 滑动窗口，A的左侧和B的右侧对接,A的左侧靠近B的右侧
    for (let i = 1; i <= lengthA; i++) {
      max = Math.max(max, maxLength(a, b, 0, lengthB - i, i))
    }

    // 滑动窗口，A和B重叠
    for (let i = lengthB - lengthA; i >= 0; i--) {
      max = Math.max(max, maxLength(a, b, 0, i, lengthA))
    }

    // 滑动窗口，A的右侧和B的左侧对接,A的右远离B的左侧
    for (let i = 1; i <= lengthA; i++) {
      max = Math.max(max, maxLength(a, b, i, 0, lengthA - i))
    }

    return max
  }

  if (nums1.length > nums2.length) {
    return getMax(nums2, nums1)
  }

  return getMax(nums1, nums2)
};
// @lc code=end

