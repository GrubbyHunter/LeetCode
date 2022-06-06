/*
 * @lc app=leetcode.cn id=1049 lang=typescript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
function lastStoneWeightII(stones: number[]): number {
  let sum = 0
  let halfSum = 0

  for (let i = 0; i < stones.length; i++) {
    sum += stones[i]
  }

  // 一半的和作为背包的容量
  halfSum = Math.floor(sum / 2)

  // dp[i]的定义为背包容量为i时候能放置数组最大的和
  let dp = new Array(halfSum + 1).fill(0)
  // 先遍历物品
  for (let i = 0; i < stones.length; i++) {
    // 再遍历背包，背包容量不能超过当前物品大小
    for (let j = halfSum; j >= stones[i]; j--) {
      // 通过轮询，找到容量为j时候最多能放的大小
      // dp[j - stones[i]]为背包容量是j - stones[i]时候·1最多能放的大小，此时，剩余容量还剩stones[i]
      // 所以dp[j] 也可能是dp[j - stones[i]] 加上 stones[i]的大小，统计最大的一个
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }

  // 一半的背包容量，最多能装dp[halfSum]，那么数组中剩下一半的和为sum - dp[halfSum]
  // 同时剩下的一半的和一定大于等于dp[halfSum]，因为dp[halfSum]可能未装满
  // sum - dp[halfSum] - dp[halfSum]即为最后碰撞后的剩余大小
  return sum - 2 * dp[halfSum]
};
// @lc code=end

