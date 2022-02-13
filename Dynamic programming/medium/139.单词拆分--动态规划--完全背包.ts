/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
  // dp[i]的定义为s字符串的前面i个长度的字符串在字符串字段中是否能正确找到拼接
  let dp = new Array(s.length + 1).fill(false)

  // 默认空字符串为true
  dp[0] = true

  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      // 当前字符串长度小于当前字典元素长度，不满足条件
      if (i < wordDict[j].length) {
        continue
      }
      // s[i]的长度字符中，j-i这段长度的字符串
      let tempStr = s.slice(i - wordDict[j].length, i)
      // j到i这段与当前字符串相等，同时0-j这段也就是dp[i - wordDict[j].length]字典能够满足
      if (tempStr === wordDict[j] && dp[i - wordDict[j].length]) {
        // 则0-i这段字典能够满足
        dp[i] = true
      }
    }
  }

  return dp[s.length]
};
// @lc code=end

