/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
function decodeString(s: string): string {
  let stack: any = [];
  let num = 0;
  let currentStr = "";

  // stack 存放 "["左边的内容
  // 例如 ABC3[A2[C]]
  // stack =>[["ABC",3],["A",2]]
  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(parseInt(s[i]))) {
      // 统计"["左边的数组
      num = num * 10 + parseInt(s[i]);
    } else if (s[i] === "[") {
      // 将"["左边的字符串和数字推入栈
      stack.push([currentStr, num]);
      // 清空字符串和数字
      currentStr = "";
      num = 0;
    } else if (s[i] === "]") {
      // 碰到"]"，从栈中取出左边的字符串和数字，与当前字符串进行组装
      let top = stack.pop();
      // C = A + C * 2 => ACC
      // ACC =  ABC + ACC * 3 =>ABCACCACCACC
      currentStr = top[0] + currentStr.repeat(top[1]);
    } else {
      // 统计"["左边的字符串
      currentStr += s[i];
    }
  }

  return currentStr;
}
// @lc code=end
