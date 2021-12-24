/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function maxProfit(prices: number[], fee: number): number {
  let sum = 0
  let buy = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < prices.length - 1; i++) {
    // 上次买的价格，跟当前需要出的钱(当前价格+税)比，取最低值
    buy = Math.min(prices[i] + fee, buy)
    if (prices[i + 1] > buy) {
      // 有盈余，统计数量
      sum += prices[i + 1] - buy
      buy = prices[i + 1]
    }
  }

  return sum
};

// @lc code=end

