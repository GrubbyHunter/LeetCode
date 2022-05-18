/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 当天的状态，持有、不持有、冻结
  let dp = new Array(prices.length).fill(0).map(() => new Array(3).fill(0))

  dp[0][0] = -prices[0] // 第一天持有，挣的钱为-prices[0]
  dp[0][1] = 0 // 第一天不持有，挣的钱为0
  dp[0][2] = 0 // 第一天冻结，挣的钱为0

  for (let i = 1; i < prices.length; i++) {
    // 第i天持有股票有2种情况
    // a.第i-1天也持有股票，第i天不操作，
    // b.第i-1天不持有股票，在第i天买入
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])

    // 第i天不持有股票的情况有3种
    // a.第i-1天也不持有股票
    // b.第i-1天是过渡期
    // c.第i-1天卖出
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2], dp[i][0] - prices[i])

    //第i天是冷冻期只有一种情况，第i-1天持有股票且卖出
    dp[i][2] = dp[i - 1][0] + prices[i];
  }

  let last = dp[dp.length - 1]

  // 去最后一天，不持有股票和冻结期的情况，取最大值，因为持有股票的情况挣的钱肯定小于这两种
  return Math.max(last[1], last[2])
};
// @lc code=end

