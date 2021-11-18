/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function isValid(s: string): boolean {
  // 此题适合用栈来处理，使用js中的数组模拟栈的行为
  let stack = []
  let arr = s.split("")

  for (let i = 0; i < arr.length; i++) {
    const length = stack.length
    const last = length ? stack[length - 1] : null

    switch (arr[i]) {
      case "(":
        stack.push(arr[i])
        break
      case "[":
        stack.push(arr[i])
        break
      case "{":
        stack.push(arr[i])
        break
      case ")":
        if (last !== "(") {
          return false
        }
        stack.pop()
        break
      case "]":
        if (last !== "[") {
          return false
        }
        stack.pop()
        break
      case "}":
        if (last !== "{") {
          return false
        }
        stack.pop()
        break
      default:
        break
    }
  }

  return stack.length === 0
};
const arr = isValid("()[]{}");

// @lc code=end

