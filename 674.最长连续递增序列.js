/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let length = nums.length

  if (length == 0) {
    return 0
  }

  if (length == 1) {
    return 1
  }

  let max = 1,
    temp = 1

  for (var i = 1; i < length; i++) {
    if (nums[i] > nums[i - 1]) {
      temp++
    } else {
      temp = 1
    }
    max = max > temp ? max : temp
  }

  return max
}
