/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  // 二分查找
  const binarySearch = (left: number, right: number): number => {
    // 越界
    if (left > right) {
      return -1
    }

    // 只剩一个元素
    if (left === right) {
      return target === nums[left] ? left : -1
    }

    // 中间值下标
    let middle = Math.floor((right + left) / 2)

    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] > target) {
      // 往左查
      return binarySearch(left, middle - 1)
    } else {
      // 往右查
      return binarySearch(middle + 1, right)
    }
  }

  let index = binarySearch(0, nums.length - 1)
  // 不能存在
  if (index === -1) {
    return [-1, -1]
  }

  let left = index, right = index
  // 继续往左找firstIndex
  while (left > 0) {
    if (nums[left] !== nums[left - 1]) {
      break
    }
    left--
  }
  // 继续往右找lastIndex
  while (right < nums.length - 1) {
    if (nums[right] !== nums[right + 1]) {
      break
    }
    right++
  }

  return [left, right]
};
// @lc code=end

