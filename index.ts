// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function calculate(s: string): number {
  // 先转化为数组
  let stack: any = []
  let sign = "+"
  let num = 0
  s = s.trim()

  for (let i = 0; i < s.length; i++) {
    // 统计当前数字，一直记录到第一个非数字元素才开始下面的计算
    // +-*/以及空格的charAt都小于"0"
    if (s.charAt(i) >= "0") {
      num = num * 10 + parseInt(s[i], 10)
    }

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
        num = sign === "*" ? stack.pop() * num : stack.pop() / num
        num = num > 0 ? Math.floor(num) : Math.round(num)
        stack.push(num)
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


calculate("14-3/2")