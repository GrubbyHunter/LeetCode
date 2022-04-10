// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
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
      let result = minVal + maxVal + preNum

      if (result >= 10) {
        result = result % 10
      }

      str = result + str

      if (minVal + maxVal + preNum >= 10) {
        preNum = 1
      } else {
        preNum = 0
      }
    }

    if (preNum !== 0) {
      str = preNum + str
    }

    return str
  }

  return num1.length > num2.length ? getSum(num2, num1) : getSum(num1, num2)
};
addStrings("584", "18");
