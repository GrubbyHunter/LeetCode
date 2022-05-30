/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let dp = new Array(s.length)
    .fill(false)
    .map(() => new Array(s.length).fill(false));
  let maxLength = 1;
  let resultStr = s[0];
  // 解法和 https://leetcode-cn.com/problems/palindromic-substrings/类似
  // 多一步记录长度的操作
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else {
        if (j - i <= 1) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      // 如果是回文子串，与最大长度比较，是否需要重新统计赋值
      if (dp[i][j] && j - i + 1 > maxLength) {
        maxLength = j - i + 1
        resultStr = s.substring(i, j + 1)
      }
    }
  }

  return resultStr;
}
// @lc code=end
