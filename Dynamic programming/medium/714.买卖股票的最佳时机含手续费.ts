/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
  let dp = new Array(prices.length).fill(0).map(() => [0, 0])
  // 第一天就买入的情况
  dp[0][1] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    // 卖出时候需要统计手续费
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
  }

  let last = dp[dp.length - 1]
  // 这里由于存在手续费，需要比较最后卖出和不卖出的情况，取较大值
  return Math.max(last[0], last[1])
};
// @lc code=end

