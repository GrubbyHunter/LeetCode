/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
// 思路：时间复杂度要求O(log n)，那么采用二分查找
function searchInsert(nums: number[], target: number): number {

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (target > nums[middle]) {
      left = middle + 1 // 目标在右边范围
    } else if (target < nums[middle]) {
      right = middle - 1 // 目标在左边范围
    } else {
      // target为数组内一元素
      return middle
    }
  }

  // 遍历结束，还是没有找到目标元素
  // 1、target插入到最前面 return left + 1 即 right + 1，因为left === right
  // 2、target插入到最后面 return right + 1
  // 3、target在范围内，但是不是数组的元素 return right + 1
  return right + 1
};
// @lc code=end




