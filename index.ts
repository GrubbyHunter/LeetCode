// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function divide(dividend: number, divisor: number): number {
  let first = Math.abs(dividend)
  let second = Math.abs(divisor)
  let result = 0
  let sum = second
  let count = 1

  if (first === second) {
    return dividend === divisor ? 1 : -1
  }

  while (first > second) {
    if (first - sum > second) {
      result += count
      first = first - sum

      sum += second
      count++
    } else if (first - sum === second) {
      result += count + 1
      first = 0
    } else {
      if (first - sum >= 0) {
        result += count
        break
      } else {
        sum -= second
        count--
      }

    }
  }

  if (dividend > 0 && divisor < 0) {
    return -result
  }
  if (dividend < 0 && divisor > 0) {
    return -result
  }
  return result
};
divide(-2147483648, -1)