/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
  let sum = 0
  let buy = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < prices.length - 1; i++) {
    // 上次买的价格，跟当前需要出的钱(当前价格+税)比，取最低值
    buy = Math.min(prices[i] + fee, buy)
    if (prices[i + 1] > buy) {
      // 有盈余，统计数量
      sum += prices[i + 1] - buy
      // 统计完更新下一次买的时候的价格
      // 这次买是prices[i + 1]，如果下一次买（下一次单价+税）大于这一次，那么没必要买
      buy = prices[i + 1]
    }
  }

  return sum
};
// @lc code=end

