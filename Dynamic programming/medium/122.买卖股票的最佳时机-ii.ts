/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let dp = new Array(prices.length).fill(0)
  // dp[i] 为第i天挣到的钱
  // 默认填充0，因为  第1天没挣到钱

  // 相当于统计每个波谷到波峰的差价，然后进行累加
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      // 今天比前一天贵，则能挣到钱，计算之前的收益 + 今天赚到的钱
      dp[i] = dp[i - 1] + prices[i] - prices[i - 1]
    } else {
      // 今天加个不如前一天，则没法挣钱，就等于前一天的收益
      dp[i] = dp[i - 1]
    }
  }

  return dp[dp.length - 1]
};
// @lc code=end

