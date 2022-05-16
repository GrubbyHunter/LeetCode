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
  dp[0][1] = -prices[0] // 因为第1次买入还没开始卖，收益是负的，所以初始化为负数
  dp[0][2] = 0
  dp[0][3] = -prices[0] // 第一天第2次买入（等于第一次买入+第一次卖出 == 0 + 第二次买入）还没开始卖，收益也是负的，所以初始化为负数
  dp[0][4] = 0

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = dp[i - 1][0] // 当天的收益=前一天也没买股票的收益，也就是一直没买，其实就是一直是0

    // 第i天还是第1次买入，可能是前i-1天就已经买入，今天不操作，维持之间的状态
    // 也可能是今天开始买入，那么需要前一天持有的现金减去今天的价格，得到买入后持有的现金
    // 两者取较大值
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])

    // 第i天还是第1次卖出，可能是前i-1天就已经第一次卖出，今天不操作，维持之间的状态
    // 也可能是今天第一次卖出，那么需要前0到i-1天第一次买入持有的现金加上今天的价格，得到卖出后持有的现金
    // 两者取较大值
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])

    // 下面同理
    // 第2次买入是在第1次卖出的基础上推导
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
    // 第2次卖出是在第2次买入的基础上推导
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
  }

  // 记录最后第二次卖时候持有的现金
  return dp[prices.length - 1][4]
};
// @lc code=end

