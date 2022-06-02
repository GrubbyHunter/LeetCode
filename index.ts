// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function longestPalindromeSubseq(s: string): number {
  // dp[i][j]的定义，下标i到j的区间内的最长公共序列
  let dp = new Array(s.length).fill(1).map(() => new Array(s.length).fill(1));

  // 状态转移方程设计到i+1，所以建议从下往上遍历，从做往右遍历
  // 遍历方法与5.最长回文子串.ts一致
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[j] === s[i]) {
        if (j - i <= 1) {
          dp[i][j] = j - i + 1
        } else {
          dp[i][j] = dp[i + 1][j - 1] + 2
        }
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  // 获取0到最有一个元素区间的最大子序列长度
  return dp[0][s.length - 1];
}
longestPalindromeSubseq("cbbd")