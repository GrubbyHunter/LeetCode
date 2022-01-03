/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function maxProfit(prices: number[]): number {
  let arr: any = []
  let sum = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      sum += prices[i] - prices[i - 1]
    } else {
      if (sum > 0) {
        arr.push(sum)
        sum = 0
      }

    }
  }

  if (sum > 0) {
    arr.push(sum)
  }

  arr.sort((a: number, b: number) => b - a)

  if (arr.length === 0) {
    return 0
  }

  if (arr.length === 1) {
    return arr[0]
  }

  return arr[1] + arr[0]
};

// @lc code=end

