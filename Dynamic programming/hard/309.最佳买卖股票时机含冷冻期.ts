/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 当天的状态，卖出、持有、冻结
  let dp = new Array(prices.length).fill(0).map(() => new Array(3).fill(0))

  dp[0][0] = 0 // 第一天卖出，挣的钱为0
  dp[0][1] = -prices[0] // 第一天买入，挣的钱为-prices[0]
  dp[0][2] = 0 // 第一天冻结，挣的钱为0

  for (let i = 1; i < prices.length; i++) {
    // 第i天不持有：前一天不持有  和  前一天持有，今天卖出挣的钱，取较大值
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])

    // 第i天持有：前一天就持有  和  今天买入挣的钱，取较大值
    // 如果今天买入，那么前一天需要认为是冻结期，需要前一天冻结期赚的钱 - 当天价格
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2] - prices[i])

    // 第i天冻结：前一天就冻结和前一天卖出，挣的钱取最大值
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][0])
  }

  let last = dp[dp.length - 1]

  // 去最后一天，不持有股票和冻结期的情况，取最大值，因为持有股票的情况挣的钱肯定小于这两种
  return Math.max(last[0], last[2])
};
// @lc code=end

