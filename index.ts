// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") {
    return "0"
  }
  let m = num1.length
  let n = num2.length

  let result = 0

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let first: number = parseInt(num1.charAt(i))
      let second: number = parseInt(num2.charAt(j))

      result += first * second * Math.pow(10, m - i - 1) * Math.pow(10, n - j - 1)
    }
  }

  return result + ""
};

multiply("123", "456")