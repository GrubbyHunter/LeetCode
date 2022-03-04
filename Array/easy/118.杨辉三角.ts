/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  let first = [1]
  let second = [1, 1]
  let result = [first]

  if (numRows === 1) {
    return result
  }

  result.push(second)

  if (numRows === 2) {
    return result
  }

  for (let i = 2; i < numRows; i++) {
    let child = []

    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        child.push(1)
      } else {
        child.push(result[i - 1][j - 1] + result[i - 1][j])
      }
    }

    result.push(child)
  }

  return result
};
// @lc code=end

