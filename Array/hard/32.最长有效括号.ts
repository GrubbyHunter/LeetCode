/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
  // 一个用来模拟栈的数组
  let stack = []
  // 转换数组，将s中有效的()转换为0，无效的()转换为1
  let exchangeArr = new Array(s.length).fill(0)

  for (let i = 0; i < s.length; i++) {
    // 当前为"("，那么将它的下标推入栈
    if (s[i] === "(") {
      stack.push(i)
    } else {
      let index = stack.pop()
      if (typeof index !== "number" || s[index] !== "(") {
        // 当前位置为")",但是他的前一个位置为不为"("
        // 所以他是无效的
        exchangeArr[i] = 1
      }
    }
  }

  // 现在stack中剩下的"("的下标都是无效的，统一置为1
  while (stack.length > 0) {
    let index = stack.pop()
    exchangeArr[index] = 1
  }

  let max = 0
  let sum = 0

  // 这样“)(())”转化成了“10000”，找到最长的连续的0即可
  for (let i = 0; i < exchangeArr.length; i++) {
    if (exchangeArr[i] === 0) {
      sum++
    } else {
      sum = 0
    }
    max = Math.max(max, sum)
  }

  return max
};
// @lc code=end

