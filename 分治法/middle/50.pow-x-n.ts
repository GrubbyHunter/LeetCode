/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  // 任何数的0次方都是1
  if (n === 0) {
    return 1
  }

  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  // n为偶数，直接x相乘，然后n次数折半
  if (n % 2 === 0) {
    return myPow(x * x, n / 2)
  }

  // n为奇数，x*(n-1个x的积)
  return x * myPow(x, n - 1)
};
// @lc code=end

