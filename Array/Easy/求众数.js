/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/** 最简单的可以使用一个对象或者是map记录出现的次数，时间复杂度是O(1)
 * 但是要求的空间较多，这里推荐一种算法叫摩尔投票法
 *
 * 这里记录第一个数，如果第一个数和第二个数不一样，那么就
 * 将第一个数和第二个数一起移出数组，如果一样的话，则累计记录
 * 这个数出现的次数
 * 这里有个前提就是众数一定是超过了数组元素数量的一半，所以
 * 就算不停地抵消之后，最终肯定剩下的就是那个众数
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
