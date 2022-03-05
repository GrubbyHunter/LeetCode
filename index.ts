// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function titleToNumber(columnTitle: string): number {
  let sum = 0

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    sum += (columnTitle[i].charCodeAt(0) - 64) * Math.pow(26, columnTitle.length - i - 1)
  }

  return sum
};
titleToNumber("AB")