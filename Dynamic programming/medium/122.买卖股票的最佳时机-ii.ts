/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let dp = new Array(prices.length).fill(0)
  // dp[i] 为第i天整到的钱
  dp[0] = 0

  for (let i = 1; i < prices.length; i++) {
    // 如果价格小于前一天，name，今天挣不到钱，挣得的钱等于i-1天
    if (prices[i] < prices[i - 1]) {
      dp[i] = dp[i - 1]
    } else {
      // 如果价格大于前一天，可以卖出，卖出的钱为前一天挣的钱+今天挣的钱
      // 可以理解为将股票今天卖了又买回来
      dp[i] = dp[i - 1] + prices[i] - prices[i - 1]
    }
  }

  return dp[dp.length - 1]
};
// @lc code=end

