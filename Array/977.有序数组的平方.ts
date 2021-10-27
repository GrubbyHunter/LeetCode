/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  // 定义一个新数组，存储顺序正确的结果
  let result = []
  let left = 0
  let right = nums.length - 1

  // 双指针，设置左右指针
  while (left < right) {
    let leftItem = Math.abs(nums[left])
    let rightItem = Math.abs(nums[right])

    // 右边的绝对值较大
    if (rightItem >= leftItem) {
      // 结果存入数组第一位
      result.unshift(Math.pow(rightItem, 2))

      // 右指针--
      right--
    } else {
      result.unshift(Math.pow(leftItem, 2))
      // 左指针++
      left++
    }
  }

  // 当 left === right 时候，不会进入循环，将最后一个树追加进数组
  result.unshift(Math.pow(Math.abs(nums[left]), 2))
  return result
};
// @lc code=end

