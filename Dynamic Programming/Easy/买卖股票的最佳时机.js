/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (49.05%)
 * Total Accepted:    38.1K
 * Total Submissions: 77.6K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 *
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 *
 * 注意你不能在买入股票前卖出股票。
 *
 * 示例 1:
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 *
 *
 * 示例 2:
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 */
/**
 * 这里先将第一个记录为最低价，如果后面是升序的话，依次将当前价格减去最低价，同时记录
 * 减去之后得到的当前最高收益，如果是当前价格比最低价格还小，则这时候再卖是要把之前转的
 * 都要亏出去的
 * 比如2,3,4,1,这里到了1这里需要将1重新设置为最低价，因为这里前面一共才赚了2元，在1这里卖的话
 * 不但要将之前的亏出去，还要多亏1元，这时候需要将这个当前元素设置为最低价，再次进行计算
 * 然后将计算得到的最高收益与之前的最高收益比较，取最大值
 * 这里的复杂度为O(n)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length == 0) {
    return 0
  }

  let max = 0,
    min = prices[0]

  for (let i = 0, j = prices.length; i < j; i++) {
    if (prices[i] > min) {
      max = max > prices[i] - min ? max : prices[i] - min
    } else {
      min = prices[i]
    }
  }

  return max
}
