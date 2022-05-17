/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
function maxProfit(k: number, prices: number[]): number {
  // 初始化dp数组
  let dp = new Array(prices.length).fill(0).map(() => new Array(2 * k + 1).fill(0))

  if (prices.length === 0) {
    return 0
  }

  // 初始化dp数组第一天的各种状态
  for (let i = 0; i < 2 * k + 1; i++) {
    if (i % 2 === 0) {
      dp[0][i] = 0 // 第0天，第1次卖出，第2次卖出，持有金额都是0
    } else {
      dp[0][i] = -prices[0] // 第1次买入，第2次买入，持有金额都是负的第一天的价格，以此类推
    }
  }

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = dp[i - 1][0] // 0为第i天未买入股票时候的持有金额，实际上他一直就是0

    for (let j = 1; j < 2 * k + 1; j += 2) {
      // 第i天第j次买入时候之后的持有现金 = 第0到i-1天买入时候持有现金 or 第i天买入（即上一个状态持有现金 - 当天价格）
      // 取最大值
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1] - prices[i])
      // 第i天第j次卖出时候之后的持有现金 = 第0到i-1天卖出时候持有现金 or 第i天卖出（即上一个状态持有现金 + 当天价格）
      // 取最大值
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i][j] + prices[i])
    }
  }

  // 获取最后一天最后一次卖出时持有现金数量
  return dp[dp.length - 1][2 * k]
};
// @lc code=end

