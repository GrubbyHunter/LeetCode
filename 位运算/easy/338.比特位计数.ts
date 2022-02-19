/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

// @lc code=start
function countBits(n: number): number[] {
  // 这里需要把0页算进去，所以初始化长度要+1
  let result = new Array(n + 1)
  result[0] = 0

  // 从1开始计算
  for (let i = 1; i <= n; i++) {
    // i & (i-1) 是去掉i的二进制最右边的1
    // 所以i & (i-1)要小于i
    // 去掉最右边的1的数，这个数的1数量是计算过的
    // 再+1，就i的二进制里面1的个数
    result[i] = result[i & (i - 1)] + 1
  }

  return result
};
// @lc code=end

