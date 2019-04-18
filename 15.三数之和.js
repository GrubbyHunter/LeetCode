/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (21.82%)
 * Total Accepted:    48.3K
 * Total Submissions: 221.5K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let length = nums.length
  let temp

  // 首先给数组排序，使用冒泡排序，按照升序排列
  for (let i = length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }

  console.log(nums)
  // 将大于0和小于0的元素分别存入两个数组
  let left
  let right
  let result = []

  let first = null
  for (let i = 0; i < length; i++) {
    // 因为不能重复，所以首个元素一样的话需要去重

    first = nums[i]
    let left = i + 1,
      right = length - 1

    while (left < right) {
      let sum = first + nums[left] + nums[right]
      if (sum == 0) {
        result.push([first, nums[left], nums[right]])
        break
      }
      if (sum > 0) {
        right--
        continue
      }

      if (sum < 0) {
        left++
      }
    }
  }

  return result
}
