/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
  let arr1 = version1.split(".")
  let arr2 = version2.split(".")
  let max = Math.max(arr1.length, arr2.length)

  for (let i = 0; i < max; i++) {
    let num1 = parseInt(i < arr1.length ? arr1[i] : '0')
    let num2 = parseInt(i < arr2.length ? arr2[i] : '0')

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
};
// @lc code=end

