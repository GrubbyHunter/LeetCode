/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function lastStoneWeightII(stones: number[]): number {
  let sum = 0
  let halfSum = 0

  for (let i = 0; i < stones.length; i++) {
    sum += stones[i]
  }

  // 和的一半为正数，那么可以把数组分成和相等两部分，对着碰撞之后和为0
  if (sum % 2 === 0) {
    return 0
  }

  // 一半的和作为背包的容量
  halfSum = Math.floor(sum / 2)

  // dp[i]的定义为背包容量为i时候能放置数组最大的和
  let dp = new Array(halfSum + 1).fill(0)
  // 解法类似 416.分割等和子集.ts
  for (let i = 0; i < stones.length; i++) {
    // j > stones[i]表示当前容量足够放入i元素的值
    for (let j = halfSum; j >= stones[i]; j--) {
      // 当前0到i个元素，存入容量为J的背包，和的最大值为dp[j]
      // 不放i时候的最大值 dp[j - stones[i]] 加上i的值stones[i]
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }

  return sum - 2 * dp[dp.length]
};
lastStoneWeightII([2, 7, 4, 1, 8, 1]);
// @lc code=end
