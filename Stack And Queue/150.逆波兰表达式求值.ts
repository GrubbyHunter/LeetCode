/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  // 依然是使用数组来模拟栈的行为
  // 表达式的特点是最里面的运算符前两个元素必定是数字：21+
  let stack = []

  for (let i = 0; i < tokens.length; i++) {

    const current = parseInt(tokens[i], 10)
    // 我们可以依次将数字元素放入栈
    if (!isNaN(current)) {
      stack.push(current)
      continue
    }

    // 这里注意：要用第二个数 加减乘除第一个数，因为第一个数在stack中是后追加进去
    // 所以他先出来
    const first = stack.pop()
    const second = stack.pop()
    let result

    // 碰到运算符，让运算符之前的两个元素进行运算
    switch (tokens[i]) {
      case "+":
        result = second + first
        break
      case "-":
        result = second - first
        break
      case "*":
        result = second * first
        break
      case "/":
        result = parseInt(second / first + "")
        break
    }

    // 然后结果放入栈
    stack.push(result)
  }
  // stack最终只会剩下一个元素，即运算的最终结果，直接返回即可
  return stack.pop()
};
// @lc code=end

