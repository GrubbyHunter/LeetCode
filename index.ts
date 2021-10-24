/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    while (nums[left] !== val) {
      left++
    }

    while (nums[right] === val) {
      right--
    }

    let temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp

    left++
    right--
  }


  return left + 1
};
let result = removeElement([3, 2, 2, 3], 3)

// @lc code=end

