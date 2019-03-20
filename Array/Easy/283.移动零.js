/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (53.00%)
 * Total Accepted:    37.9K
 * Total Submissions: 71.4K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 *
 *
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   let length = nums.length,
//     i = length,
//     temp
//   while (i > 0) {
//     for (let j = 0; j < i - 1; j++) {
//       if (nums[j] == 0) {
//         temp = nums[j]
//         nums[j] = nums[j + 1]
//         nums[j + 1] = temp
//       }
//     }
//     i--
//   }
// }
var moveZeroes = function(nums) {
  let length = nums.length,
    temp
  let j = 0
  for (let i = 0; i < length; i++) {
    if (nums[i] != 0) {
      temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      j++
    }
  }
}
