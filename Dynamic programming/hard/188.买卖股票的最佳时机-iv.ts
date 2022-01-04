/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
function maxProfit(k: number, prices: number[]): number {
  let dp = new Array(prices.length).fill(0).map(() => new Array(2 * k + 1).fill(0))

  if (prices.length === 0) {
    return 0
  }

  for (let i = 0; i < 2 * k + 1; i++) {
    // 初始化第一天的持有现金，下标0为不持有的情况，1,3,5下标分别表示第1,2,3次买入的情况
    // 买入持有现金就是减去第一天的价格，其他元素生成数组时候就是0，不需要初始化
    if (i % 2 !== 0) {
      dp[0][i] = -prices[0]
    }
  }

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = dp[i - 1][0]

    for (let j = 1; j < 2 * k + 1; j++) {
      let prePrice = dp[i][j - 1]
      // 第j%2次卖出
      if (j % 2 === 0) {
        // 卖出 + 当前天价格
        prePrice += prices[i]
      } else {
        // 第j%2次买入，买入减去当前天价格
        prePrice -= prices[i]
      }
      // 和维持前一天状态的情况比较，取较大值
      dp[i][j] = Math.max(dp[i - 1][j], prePrice)
    }
  }

  // 获取最后一天最后一次卖出时持有现金数量
  return dp[dp.length - 1][2 * k]
};
// @lc code=end

