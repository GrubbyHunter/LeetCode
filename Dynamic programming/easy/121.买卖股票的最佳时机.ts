/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 初始化一个prices.length行，2列的二维数组
  let dp = new Array(prices.length).fill(0)
  let min = prices[0]
  // dp[i]为前i天的最大收益，第一天由于没法卖，所以dp[0] = 0
  dp[0] = 0

  for (let i = 1; i < prices.length; i++) {
    // 第i天的最大收益 = 前i-1天的最大收益和 当前价格 - i-1天的最小价格中
    // 较大的那个值
    dp[i] = Math.max(dp[i - 1], prices[i] - min)
    // 重新赋值最小值
    if (prices[i] < min) {
      min = prices[i]
    }
  }

  return dp[dp.length - 1]
};
// @lc code=end

