/*
 * @lc app=leetcode.cn id=171 lang=typescript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  let sum = 0

  //从右往左遍历
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    // 每往左一位，需要多乘以一个26
    sum += (columnTitle[i].charCodeAt(0) - 64) * Math.pow(26, columnTitle.length - i - 1)
  }

  return sum
};
// @lc code=end

