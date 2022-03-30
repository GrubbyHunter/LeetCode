/*
 * @lc app=leetcode.cn id=693 lang=typescript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
function hasAlternatingBits(n: number): boolean {
  // 先将二进制数右移一位
  // 如果是交替二进制，name右移一位之后，当前位于他的相邻位肯定不同
  // 例如：5=>101 ,右移之后是 010
  // 101 ^ 010，每一位都不同，结果就是111
  n = n ^ (n >> 1);

  // 111+1之后是1000，这样1000与0111每一位都不相同，&运算之后就变成了0000 = 0
  return (n & (n + 1)) === 0;
}
// @lc code=end
