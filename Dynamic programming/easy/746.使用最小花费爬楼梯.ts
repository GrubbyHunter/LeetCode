/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  const length = cost.length
  // dp[index] 表示到达下标为index的台阶需要的费用
  // 因为可以直接从0，或者1开始，所以到达这两步台阶的开销为0
  let dp = [0, 0]


  for (let i = 2; i < length; i++) {
    // 到达i有两种情况：1、i-1步再走一步，2、i-2步再走两步
    // 到达i-1步的开销dp[i - 1]，加上i - 1本身需要的费用，就是到达i步的费用
    // 这两者中去较小值
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }

  // 最后一步台阶再走一步和倒数第二步台阶再走两步，都可以走完台阶
  // 比较这两种中费用较小的
  return Math.min(dp[length - 1] + cost[length - 1], dp[length - 2] + cost[length - 2])
};

// @lc code=end

