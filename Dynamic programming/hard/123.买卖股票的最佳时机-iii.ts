/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 初始化一个length行5列的二维动态规划数组
  let dp = new Array(prices.length).fill(0).map(() => new Array(5).fill(0))
  // dp的含义，规划出5列，表示当前第i天持有收益的5种状态
  // 1、没有买股票状态 dp[i][0]
  // 2、第一次买入状态 dp[i][1]
  // 3、第一次卖出状态 dp[i][2]
  // 4、第二次买入状态 dp[i][3]
  // 5、第二次卖出状态 dp[i][4]

  // 对几种状态第一天进行初始化
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  dp[0][2] = 0
  dp[0][3] = -prices[0]
  dp[0][4] = 0

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = dp[i - 1][0] // 不买股票，那赚的钱跟前一天相同
    // 当天是第一次买入状态，这里只要维持第一次买入状态就行，可能是当天没买，前一天是第一次买入，也可能是当天是第一次买入
    // 前一天没买持有的现金 - 当天价格 与 当天就没买，维持前一天第一次买入持有现金值比较
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
    // 当前是第一次卖出种状态，这里只要维持第一次卖出状态就行，可能是当天没卖，前一天是第一次卖出入，也可能是当天是第一次卖出
    // 前一天第一次买入持有的现金 + 当天价格 与 当天就没卖，维持前一天第一次卖出持有现金值比较
    dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2])

    // 下面同理
    dp[i][3] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][3])
    dp[i][4] = Math.max(dp[i - 1][3] + prices[i], dp[i - 1][4])
  }

  // 记录最后第二次卖时候持有的现金
  return dp[prices.length - 1][4]
};
// @lc code=end

