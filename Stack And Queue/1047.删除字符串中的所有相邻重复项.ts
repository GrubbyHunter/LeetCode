/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
  // 还是使用数组来模拟栈的行为
  let stack = []
  let arr = s.split("")

  for (let i = 0; i < arr.length; i++) {
    // 取出栈中最后一个元素
    let last = stack.pop()

    // 如果最后一个元素不等于当前元素
    if (last !== arr[i]) {
      // 最后一个元素重新填回栈
      stack.push(last)
      // 新元素填充进栈
      stack.push(arr[i])
    }
  }

  return stack.join("")
};
// @lc code=end

