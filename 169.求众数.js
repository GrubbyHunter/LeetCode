/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/** 最简单的可以使用一个对象或者是map记录出现的次数，时间复杂度是O(1)
 * 但是要求的空间较多，这里推荐一种算法叫摩尔投票法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let num = nums[0],
    count = 1
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] == num) {
      count++
    } else {
      count--
    }

    if (count == 0) {
      num = nums[i + 1]
    }
  }

  return num
}
