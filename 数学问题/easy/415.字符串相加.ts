/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  const getSum = (min: string, max: string): string => {
    let str: string = ""
    let preNum = 0
    for (let i = 1; i <= max.length; i++) {
      // 将字符串转化为数字
      // 这里如果不是typesctipt可以使用 min.charAt(i) - "0" 将字符串转化为数字
      let minVal: number = parseInt(min.charAt(min.length - i) || "0")
      let maxVal: number = parseInt(max.charAt(max.length - i))
      // 当前位的和需要加上进位
      let result = minVal + maxVal + preNum

      if (result >= 10) {
        result = result % 10
      }

      // 累计结果
      str = result + str
      // 不使用result比较，因为result已经被%10
      if (minVal + maxVal + preNum >= 10) {
        preNum = 1
      } else {
        preNum = 0
      }
    }

    // 最后出现多余的进位，比如1+9，变成了10，这时候返回str的是0，需要加上多余的进位
    if (preNum !== 0) {
      str = preNum + str
    }

    return str
  }

  return num1.length > num2.length ? getSum(num2, num1) : getSum(num1, num2)
};
// @lc code=end

