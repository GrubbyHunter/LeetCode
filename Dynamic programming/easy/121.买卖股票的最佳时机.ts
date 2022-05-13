/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // dp[i]的定义为0到第i天获得的最大利润
  // 由于第一天没有获得利润，所以默认填充0，dp[0]=0，后面的通过dp[0]递推
  let dp = new Array(prices.length).fill(0)
  // 记录当前0-i范围的最小价格
  let min = dp[0]

  for (let i = 1; i < prices.length; i++) {
    // 今天的最大收益跟昨天的最大收益比
    // 实际上就是在中个股票区间找到波峰和波谷，然后相减
    dp[i] = Math.max(dp[i - 1], prices[i] - min)
    //重新同级最小价格
    min = Math.min(min, prices[i])
  }

  return dp[dp.length - 1]
};
// @lc code=end

