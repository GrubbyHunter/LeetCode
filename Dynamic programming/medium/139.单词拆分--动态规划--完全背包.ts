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

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      let len = wordDict[j].length
      // i长度大于等于当前字符串长度，表示背包有足够的容量放wordDict[j]  
      // 当前i容量的背包不放wordDict[j]时候，当前字典能够满足
      // 当前容量i放入wordDict[j]后，wordDict[j]与不放wordDict[j]的下标到结尾这之间的字符串相等
      if (i >= len && dp[i - len] && s.substring(i - len, i) === wordDict[j]) {
        dp[i] = true
      }
    }
  }
  return dp[s.length]
};
// @lc code=end

