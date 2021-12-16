/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function candy(ratings: number[]): number {
  let sum = 1
  let preValue = 1
  let preNum = ratings[0]
  let preContinuityIndex = 0

  for (let i = 1; i < ratings.length; i++) {
    let currentValue

    if (ratings[i] > preNum) {
      currentValue = preValue + 1
    } else {
      if (ratings[i] === preNum) {
        preContinuityIndex = i
      }

      currentValue = preValue > 1 ? 1 : 0
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
candy([1, 0, 2])
// @lc code=end

