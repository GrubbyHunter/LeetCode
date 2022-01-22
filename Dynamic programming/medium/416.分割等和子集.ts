/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
  let sum = 0
  let halfSum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }

  halfSum = sum / 2
  // 和的一半为小数，则不可能存在将数组分成两个相等和的子数组可能
  if (halfSum !== Math.floor(halfSum)) {
    return false
  }

  // 和的一半，作为背包的容量，dp[i]的定义为背包容量为i时候能放置数组最大的和
  let dp = new Array(halfSum + 1).fill(0)

  // 分别计算从第一个数到最后一个数，halfSum的容量最大能存放的和为多少
  for (let i = 0; i < nums.length; i++) {
    // j的容量如果币当前数值还小，没发存放，直接不进入循环
    for (let j = halfSum; j >= nums[i]; j--) {
      // 如果能放入nums[i], 那么容量是j - nums[i] 的和为dp[j - nums[i]]
      // dp[j - nums[i]] + 放入的第i个元素的值nums[i]，即为dp[j]
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
  }

  // halfSum容量的时候，值是否等于和的一半，是的话满足条件
  return dp[halfSum] === halfSum
};
// @lc code=end

