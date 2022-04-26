/*
 * @lc app=leetcode.cn id=400 lang=typescript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
function findNthDigit(n: number): number {
  let d = 1, count = 9;

  while (n > d * count) {
    n -= d * count;
    d++;
    count *= 10;
  }

  const index = n - 1;
  // 当前区间的起始数字，比如10，100,1000
  const start = Math.floor(Math.pow(10, d - 1));
  // 当前区间的第几个数字，就是起始数字+xx
  const num = start + Math.floor(index / d);
  // 下标
  const digitIndex = index % d;

  return Number(num.toString()[digitIndex]);
};
// @lc code=end

