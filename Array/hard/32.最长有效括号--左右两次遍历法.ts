/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
  let left = 0
  let right = 0
  let max = 0

  // 从左往右遍历统计连续有效括号个数
  for (let i = 0; i < s.length; i++) {
    // 左右相等，当时当前为右括号，则说明左右有效括号被当前s[i]中断
    // 例如 ()())(),第5个元素)中断连续有效的子数组
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

    // 左右相等，连续括号个数等于left+right => left * 2
    if (left === right) {
      max = Math.max(max, left * 2)
    }
  }

  left = 0
  right = 0

  // 从右往左遍历统计连续有效括号个数
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
  // 遍历两次是为了规避数据不全的情况
  // 例如：()((())，这种第二个连续有效数组(())，会因为前面有个(
  // left = 3，right = 2,无法获取到正确的结果4，从右往左则能找到这种结果
  return max
};
// @lc code=end