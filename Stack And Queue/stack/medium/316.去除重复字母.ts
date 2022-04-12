/*
 * @lc app=leetcode.cn id=316 lang=typescript
 *
 * [316] 去除重复字母
 */

// @lc code=start
function removeDuplicateLetters(s: string): string {
  let indexArr = new Array(26).fill(0)
  let stack = new Array()

  for (let i = 0; i < s.length; i++) {
    // 记录每个字母出现的次数
    indexArr[s.charCodeAt(i) - 97]++
  }

  for (let i = 0; i < s.length; i++) {
    // 遍历到当前字母，当前字母在字符串中出现的次数-1
    indexArr[s.charCodeAt(i) - 97]--

    while (stack.length > 0
      && stack[stack.length - 1] > s[i]) {

      // 当前元素后面，不存在栈顶元素（次数等于）
      if (indexArr[stack[stack.length - 1].charCodeAt() - 97] === 0) {
        // 跳出循环
        break
      }

      // stack中已经存在当前元素
      if (stack.indexOf(s[i]) > -1) {
        break
      }
      // 移除栈顶元素
      stack.pop()
    }

    // 当前元素推入栈顶
    if (stack.indexOf(s[i]) === -1) {
      stack.push(s[i])
    }

  }
  return stack.join("")
};
// @lc code=end

