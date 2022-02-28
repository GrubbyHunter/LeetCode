// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
function longestValidParentheses(s: string): number {
  let left = 0
  let right = 0
  let max = 0

  for (let i = 0; i < s.length; i++) {
    if (left === right && s[i] == ")") {
      left = 0
      right = 0
      continue
    }

    // 如果
    if (s[i] === "(") {
      left++
    } else {
      right++
    }

    if (left === right) {
      max = Math.max(max, left * 2)
    }
  }
  left = 0
  right = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (left === right && s[i] == "(") {
      left = 0
      right = 0
      continue
    }

    // 如果
    if (s[i] === ")") {
      right++
    } else {
      left++
    }

    if (left === right) {
      max = Math.max(max, left * 2)
    }
  }

  return max
};
longestValidParentheses(")()())")