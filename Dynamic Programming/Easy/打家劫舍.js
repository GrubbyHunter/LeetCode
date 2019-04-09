/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 *
 * https://leetcode-cn.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (39.56%)
 * Total Accepted:    21.2K
 * Total Submissions: 53.5K
 * Testcase Example:  '[1,2,3,1]'
 *
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 *
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 *
 * 示例 1:
 *
 * 输入: [1,2,3,1]
 * 输出: 4
 * 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 *
 * 示例 2:
 *
 * 输入: [2,7,9,3,1]
 * 输出: 12
 * 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 *
 *
 */
/**
 * 这里提的状态转换方程可以理解为
 * dp[i] = max(dp[i-2]+nums[i],dp[i-1])
 * 也就是说，到达第i个元素的最高金额为dp[i]。他等于dp[i-2](也就是他的上上个元素的最高金额)+第i个元素本身
 * 的金额与dp[i-2](也就是他的上个元素的最高金额)这两个值的较大值，因为隔一个房间才能偷，可以理解为第一个
 * 元素和第三个元素的和与第二个元素的值进行比较，取较大值
 * 然后下次遍历dp[i-1]等于之前的那个较大值，dp[i-2]等于之前的dp[i-1]
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length == 0) {
    return 0
  }

  if (nums.length == 1) {
    return nums[0]
  }
  if (nums.length == 2) {
    return Math.max(nums[0], nums[1])
  }

  let dp1 = nums[0],
    dp2 = Math.max(nums[0], nums[1]),
    sum = 0

  for (let i = 2, j = nums.length; i < j; i++) {
    sum = Math.max(dp1 + nums[i], dp2)
    dp1 = dp2
    dp2 = sum
  }

  return sum
}
