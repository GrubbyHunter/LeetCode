/*
 * @lc app=leetcode.cn id=227 lang=typescript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
function calculate(s: string): number {
  // 先转化为数组
  let stack: any = []
  // 默认标记为+。让他降低一个数组push到数组
  // 12也可以理解为+12
  let sign = "+"
  let num = 0
  s = s.trim()

  for (let i = 0; i < s.length; i++) {
    // 统计当前数字，一直记录到第一个非数字元素才开始下面的计算
    // +-*/以及空格的charAt都小于"0"
    if (s.charAt(i) >= "0") {
      num = num * 10 + parseInt(s[i], 10)
    }

    // 空格不纳入计算，同时如果是最后一个元素，也需要添加进去计算
    if ((s.charAt(i) < "0" && s[i] !== " ") || i === s.length - 1) {
      if (sign === "+") {
        // 将之前统计的结果，也就是符号之前的数字存入栈
        stack.push(num)
      } else if (sign === "-") {
        // 这里push进去-num是为了遍历栈时候都使用加法
        stack.push(-num)
      } else if (sign === "*" || sign === "/") {
        // 乘法和除法，需要优先计算，计算完结果，放入栈
        // 这里num是上一个数，而只有上一个元素是运算符才能进到这里来
        let temp = stack.pop()
        let isNegative = temp < 0
        // 因为有限乘法和除法，所以temp/num的结果要向下取整
        temp = Math.abs(temp)
        num = sign === "*" ? temp * num : Math.floor(temp / num)

        // temp本身小于0，放回stack中的结果也要小于0
        stack.push(isNegative ? -num : num)
      }

      // 计算完一个数之后重置num，统计下一个数
      num = 0
      // 记录符号，以便下一次遍历到他后面的数字，拿出来使用
      sign = s[i]
    }
  }

  // 计算stack中元素的和
  return stack.reduce((prev: number, curr: number) => prev + curr);
};
// @lc code=end

