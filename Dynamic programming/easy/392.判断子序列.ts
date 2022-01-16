/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  let dp = new Array(s.length + 1).fill(0)
    .map(() => new Array(t.length + 1).fill(0))

  // 此题类似：1143.最长公共子序列.ts
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      // 两个字符相等，等于两个字符串前一个字符的长度dp[i-1][j-1] 加上1
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // 不相等的话，这里和1143题的处理有点区别
        // 这里是判断是否是目标字符串的子串，可以理解为 s的长度一定小于t
        // 比较的时候如果不相等，那么dp[i][j]只需要等于同一行s的当前字符与t的前一个字符比较的长度
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  // 最后比较重复子序列的长度是否等于s本身的长度
  return dp[s.length][t.length] === s.length
};
// @lc code=end

