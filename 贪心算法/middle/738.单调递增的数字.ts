/*
 * @lc app=leetcode.cn id=738 lang=typescript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
function monotoneIncreasingDigits(n: number): number {
  let strArr: any = n.toString()

  strArr = strArr.split('').map(item => {
    return +item
  })

  let endIndex = Number.MAX_SAFE_INTEGER
  for (let i = strArr.length - 1; i > 0; i--) {
    if (strArr[i - 1] > strArr[i]) {
      endIndex = i
      strArr[i - 1] = strArr[i - 1] - 1
      strArr[i] = 9
    }
  }

  for (let i = endIndex; i < strArr.length; i++) {
    strArr[i] = 9
  }

  return parseInt(strArr.join(""), 10)
};
// @lc code=end

