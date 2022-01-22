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
  // 解法类似 416.分割等和子集.ts
  for (let i = 0; i < stones.length; i++) {
    // j >= stones[i]表示当前容量足够放入i元素的值
    for (let j = halfSum; j >= stones[i]; j--) {
      // 当前0到i个元素，存入容量为J的背包，和的最大值为dp[j]
      // 不放i时候的最大值 dp[j - stones[i]] 加上i的值stones[i]
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }

  return sum - 2 * dp[dp.length - 1]
};
// @lc code=end

