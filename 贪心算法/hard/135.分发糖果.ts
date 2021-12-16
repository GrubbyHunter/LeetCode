/*
 * @lc app=leetcode.cn id=135 lang=typescript
 *
 * [135] 分发糖果
 */

// @lc code=start
function candy(ratings: number[]): number {
  let sum = 0
  let candyArr: number[] = [1]

  // 从左向右遍历，保证小孩得分高的得到的数量比他左边得分低的多
  for (let i = 1; i < ratings.length; i++) {
    // 如果后面的得分高，name在前一个的糖果数基础上+1，保证大于左边的糖果数
    if (ratings[i] > ratings[i - 1]) {
      candyArr.push(candyArr[i - 1] + 1)
    } else {
      // 后面的得分低，name只得到最低的一个糖果
      candyArr.push(1)
    }
  }

  // 从右向左遍历，保证小孩得分高的得到的数量比他右边得分低的多
  for (let i = ratings.length - 2; i >= 0; i--) {
    // 如果前面的得分高，name在前一个的糖果数基础上+1，或者维持当前的数量
    if (ratings[i] > ratings[i + 1]) {
      candyArr[i] = Math.max(candyArr[i], candyArr[i + 1] + 1)
    }
  }

  // 统计总数
  for (let i = 0; i < candyArr.length; i++) {
    sum += candyArr[i]
  }

  return sum
};

// @lc code=end

