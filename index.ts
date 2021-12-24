/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function maxProfit(prices: number[], fee: number): number {
  let minPrice = prices[0]
  let currentMinPrice = prices[0]
  let maxSum = 0
  let sum = 0

  for (let i = 0; i < prices.length; i++) {

    if (i === 0) {
      continue
    }

    // 计算之交易一次时候能得到的最大值
    let currentSum = prices[i] - minPrice

    if (currentSum > 0) {
      maxSum = Math.max(currentSum, maxSum)

    } else {
      minPrice = prices[i]
      currentMinPrice = prices[i]
    }

    // 计算交易多次时候的累计最大值

  }

  return Math.max(sum, maxSum - fee)
};
maxProfit([1, 4, 6, 2, 8, 3, 10, 14], 3)
// @lc code=end

