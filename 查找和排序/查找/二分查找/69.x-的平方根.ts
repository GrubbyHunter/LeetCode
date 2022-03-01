/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x === 1) {
    return 1
  }

  let max = x
  let min = 0

  // 二分查找
  // max和min之间相差不到1时候跳出循环
  // 表示x的只在max*max和min*min之间
  while (max - min > 1) {
    let mid = Math.floor((max + min) / 2)
    // 变相的 x < mid * mid

    if (x / mid < mid) {
      max = mid
    } else {
      min = mid
    }
  }

  // 由于题目要求向下取整，所以取
  return min
};
// @lc code=end

