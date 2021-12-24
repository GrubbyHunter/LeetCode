/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
  let minPrice = Number.MAX_SAFE_INTEGER
  let currentMinPrice = prices[0]
  let maxSum = 0
  let sum = 0

  for (let i = 0; i < prices.length; i++) {
    if (i > 0) {
      let currentSum = prices[i] - currentMinPrice
      if (currentSum > 0) {
        maxSum = Math.max(currentSum, maxSum)
      } else {
        currentMinPrice = prices[i]
      }
    }

    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }

    let result = prices[i] - minPrice
    if (result > fee) {
      sum += result - fee
      minPrice = Number.MAX_SAFE_INTEGER
    }
  }

  return Math.max(sum, maxSum - fee)
};
// @lc code=end

