/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  // 首先确保n 大于0
  // 同时是2的幂的数，他的二进制数只有1位是1，其他都是0
  // 2: 10  4: 100 8:1000
  // 所有n-1的二进制就是之前1的地方变成了0，1之前的0全部变成了1
  // 4-1 = 3 => 011     8-1 = 7 => 0111
  // 两数进行&运算，&运算必须要同位置都是1才会是1，所以
  // 8 & 7 => 1000 & 0111 结果为0
  // 如果不是2的幂，则不满足这个条件
  return n > 0 && ((n & (n - 1)) === 0)
};
// @lc code=end

