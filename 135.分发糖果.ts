/*
 * @lc app=leetcode.cn id=135 lang=typescript
 *
 * [135] 分发糖果
 */

// @lc code=start
function candy(ratings: number[]): number {
  let sum = 1
  let preValue = 1
  let preNum = ratings[0]
  let preContinuityIndex = 0
  let preMaxValue = 0
  for (let i = 1; i < ratings.length; i++) {
    let currentValue

    if (ratings[i] > preNum) {
      currentValue = preValue + 1
    } else {
      if (ratings[i] === preNum) {
        preContinuityIndex = i
      } else {
        preMaxValue = preNum
      }

      currentValue = preValue - 1 >= 1 ? 1 : 0
    }

    if (currentValue === 0) {
      sum += (i - preContinuityIndex) * 1

      currentValue = 1
    }

    sum += currentValue
    preValue = currentValue
    preNum = ratings[i]
  }

  return sum
};

// @lc code=end

