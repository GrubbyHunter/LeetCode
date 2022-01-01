/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }
  // dp[i]表示偷到第i家能偷到的最大值
  let dp = new Array(nums.length).fill(0)
  // 记录最大值
  let max = 0

  // 这里分两种情况
  // 第一种，从第一家开始偷，那么由于是环，最后一家不能偷
  dp[0] = nums[0]
  dp[1] = Math.max(nums[1], nums[0])
  // 从第3家开始初始化求值，由于最后一家不能偷，所以遍历到倒数第二家
  for (let i = 2; i < nums.length - 1; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  // 统计偷到的最大值
  max = dp[nums.length - 2]


  // 第二种情况，需要偷最后一家，那么第一家不能偷，重新初始化数组
  dp = new Array(nums.length).fill(0)
  // 第一家不能偷， == 0
  dp[0] = 0
  dp[1] = nums[1] // 第二家可以偷，第1家是0，所以不用比较，第2家是nums[i]

  for (let i = 2; i < nums.length; i++) {
    // 遍历求值时候统计到最后一家
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }

  // 比较两种情况，获取比较大的那个值
  return Math.max(max, dp[nums.length - 1])
};
// @lc code=end

