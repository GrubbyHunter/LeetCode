/*
 * @lc app=leetcode.cn id=461 lang=typescript
 *
 * [461] 汉明距离
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
  // s记录异或运算的结果
  // ^ 运算，转换为二进制后，相同为0，不同为1
  let s = x ^ y; // 所以s转化为2进制中有多少个1，就有多少位不同
  // 例如4 ^ 15 = 11 =>二进制1011，有3个1，汉明距离就是3

  let count = 0;
  while (s) {
    // 通过s-1与s做&运算，消除最左边的1，每消除一个，统计
    s = s & (s - 1);
    // 例如 11 => 二进制为1011
    // &运算需要两位都是1才等于1，所以减1之后最右边肯定变成了0
    // 1011 & 1010 = 1010
    // 1010 & 1001 = 1000
    // 1000 & 0111 = 0000
    count++;
  }

  return count;
}
// @lc code=end
