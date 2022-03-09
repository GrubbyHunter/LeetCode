/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 */

// @lc code=start
function numDecodings(s: string): number {
  // dp[i]表示前i个字符有多少种可能
  let dp = new Array(s.length + 1).fill(0)

  if (s.length === 0) {
    return 0
  }
  if (s.length === 1) {
    return s[0] === "0" ? 0 : 1
  }

  // 初始化DP0和DP1
  dp[0] = 1

  for (let i = 0; i < s.length; i++) {

    // 当前数字为0，dp[i] 为0，否贼暂时等于dp[i-1]
    dp[i + 1] = s[i] === '0' ? 0 : dp[i];

    // 如果当前数字与他的前一个数字组合满足1-26之间
    if (i > 0 && (s[i - 1] == '1' || (s[i - 1] == '2' && s[i] <= '6'))) {
      // 那么相当于dp[i] = dp[i-1] + dp[i-2]
      dp[i + 1] += dp[i - 1];
    }

  }

  return dp[s.length]
};
// @lc code=end

