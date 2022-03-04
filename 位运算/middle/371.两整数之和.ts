/*
 * @lc app=leetcode.cn id=371 lang=typescript
 *
 * [371] 两整数之和
 */

// @lc code=start
function getSum(a: number, b: number): number {
  // ^ 运算，二进制数同位置相同就是0，否则是1
  let sum = a ^ b
  // 这样 sum就是 a与b的二进制数，同位置不相同的部分的和

  // &运算，二进制数同位置两个都是1才是1，否则是0
  let carry = (a & b) << 1
  // 这样 a & b中同位置不相同的部分都是0，再往左进1（<<1）
  // 就得到同位置相同部分的和
  // 二进制数：同位置相同部分的和 + 同位置不同部分的和 = a+b的和
  // 为什么要进1，因为 1 & 1 等于 1，实际上1+1 等于2，也就是10，所以需要往左进一位


  // 如果carry等于0了，那么同位置相同部分和为0
  if (carry === 0) {
    // 和都在二进制数同位置不相同部分那里，直接返回sum
    return sum
  }

  // 如果carry不等于0，说明二进制同位置相同部分还有值，需要继续递归
  return getSum(carry, sum)
};
// @lc code=end

