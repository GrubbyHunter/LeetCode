/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
  let dp = new Array(prices.length).fill(0).map(() => [0, 0])
  // 由于含税，需要保留持有和不持有两个状态，因为不确认那个状态盈利更多
  dp[0][0] = 0 // 第一天不买入
  dp[0][1] = -prices[0] // // 第一天就买入的情况

  for (let i = 1; i < prices.length; i++) {
    // 第i天不持有 = 之前就不持 or 今天卖掉
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
    // 第i天持有 = 之前就持有 or 今天买入
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }


  let last = dp[dp.length - 1]
  // 这里由于存在手续费，需要比较最后卖出和不卖出的情况，取较大值
  return Math.max(last[0], last[1])
};
// @lc code=end

