/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function countSubstrings(s: string): number {
  // dp的定义为下标i到下标j的字符串是否是回文字符串
  let dp = new Array(s.length)
    .fill(false)
    .map(() => new Array(s.length).fill(false));
  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i <= 1) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j]) {
        result++;
      }
    }
  }

  return result;
}
countSubstrings("fdsklf");
// @lc code=end
