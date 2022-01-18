/*
 * @lc app=leetcode.cn id=583 lang=typescript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  let dp = new Array(word1.length + 1)
    .fill(0)
    .map(() => new Array(word2.length + 1).fill(0));

  // 转化为求两个字符串最大公共子序列的问题, [1143] 最长公共子序列
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // 获取公共子序列长度
  let sameLength = dp[word1.length][word2.length];
  // 然后，两个字符串都减去公共子序列长度，就是最小删除步数
  return word1.length + word2.length - 2 * sameLength;
}
// @lc code=end
