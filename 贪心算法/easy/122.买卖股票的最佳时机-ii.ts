/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let sum = 0

  // 假如第1天买入，第3天卖出，那么利润为：prices[2] - prices[0]
  // 相当于(prices[2] - prices[1]) + (prices[1] - prices[0])
  for (let i = 1; i < prices.length; i++) {
    // 局部最优：收集每天的正利润，把利润分解为每天为单位的维度
    if (prices[i] - prices[i - 1] > 0) {
      // 全局最优：求得最大利润
      sum += prices[i] - prices[i - 1]
    }
  }

  return sum
};
// @lc code=end

