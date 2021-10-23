/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  //  * @desc 思路：时间复杂度要求O(log n)，那么采用二分查找
  let mid = Math.floor(nums.length / 2)
  if (nums.length === 0) {
    return 1
  }

  if (target < nums[mid]) {
    return searchInsert(nums.slice(0, mid), target)
  } else if (target > nums[mid]) {
    return mid + 1 + searchInsert(nums.slice(mid + 1), target)
  } else {
    return mid
  }
};

let result = searchInsert([1, 3, 5, 6], 7)

// @lc code=end

