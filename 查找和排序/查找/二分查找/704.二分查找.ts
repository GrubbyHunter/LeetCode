/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  const binarySearch = (left: number, right: number): number => {
    if (left === right) {
      return nums[left] === target ? left : -1
    }

    let mid = Math.floor((left + right) / 2)

    if (nums[mid] > target) {
      return binarySearch(left, mid - 1)
    } else if (nums[mid] < target) {
      return binarySearch(mid + 1, right)
    } else {
      return mid
    }
  }

  return binarySearch(0, nums.length - 1)
};
// @lc code=end

