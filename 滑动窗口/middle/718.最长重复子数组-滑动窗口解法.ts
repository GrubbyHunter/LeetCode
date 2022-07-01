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

    // A的左侧对接B的右侧
    for (let i = 1; i <= lengthA; i++) {
      // 最后一个参数，比对的长度从1增大到lengthA
      max = Math.max(max, maxLength(a, b, 0, lengthB - i, i))
    }

    //  滑动窗口，A和B重叠 A完全正在B的内部
    for (let i = 1; i <= lengthB - lengthA; i++) {
      //最后一个参数，比对的长度一直是lengthA
      max = Math.max(max, maxLength(a, b, 0, lengthB - lengthA - i, lengthA))
    }

    // A的右侧从B的左侧退出
    for (let i = 1; i <= lengthA; i++) {
      // 最后一个参数，比对的长度从lengthA减小到1
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

