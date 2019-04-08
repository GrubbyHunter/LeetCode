/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (43.93%)
 * Total Accepted:    47.8K
 * Total Submissions: 108.8K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */
/** 1、使用动态规划:
 * 假设到第i项有最大的子序列和，那么可以确认的是，子序列之后为到达第i-1项的最大子序列之和+nums[i]
 * 或者直接就等于nums[i](这种情况，他前面的第i-1项的子序列之和为负数)
 * 所以这时候我们要做的是：从第一个元素开始，统计累加统计前i-1项的和
 * 如果和为正数，name和加上当前项然后进行下一次统计，同时记录这个和的值
 * 如果和为负数，name应该抛弃掉前面i-1项的和，以第i项开始重新进行统计
 * 同时比较当前第i项和之前的sum的大小，去较大的元素进行下一次比较
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length == 0) {
    return 0
  }
  let sum = nums[0]
  let temp = nums[0]

  for (let i = 1, j = nums.length; i < j; i++) {
    if (temp > 0) {
      temp += nums[i]
    } else {
      temp = nums[i]
    }

    if (temp > sum) {
      sum = temp
    }
  }

  return sum
}
