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
  // 一个元素只能放一次，那么需要先遍历物品
  for (let i = 0; i < nums.length; i++) {
    // 再遍历背包，，用单个物品计算当前背包的容量
    // 背包容量要大于等于物品才能放物品
    for (let j = halfSum; j >= nums[i]; j--) {
      // 当前背包容量 = 之前同级的最大容量和放入nums[i]时候最大的容量
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
  }
  // halfSum容量的时候，值是否等于和的一半，是的话满足条件
  return dp[halfSum] === halfSum
};
// @lc code=end

