/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  let arr1: string[] = text1.split("");
  let arr2: string[] = text2.split("");
  // dp[i][j]的定义为从0到i-1的arr1字符长度和从0到j-1的arr2的字符串长度的最长公共子序列
  // 这里初始化时候因为是从第0个元素开始比较，所以value可以初始化为0
  let dp = new Array(arr1.length + 1)
    .fill(0)
    .map(() => new Array(arr2.length + 1).fill(0));

  // 由于数组每次都是从第一个元素开始比较是否相同，所以i和j都从1开始方便计算
  for (let i = 1; i <= arr1.length; i++) {
    for (let j = 1; j <= arr2.length; j++) {
      // 当前两个字符相等，取两个数组的上一个字符，二维数组前一行和前一列的值 + 1
      if (arr1[i - 1] === arr2[j - 1]) {
        dp[i][j] += dp[i - 1][j - 1] + 1;
      } else {
        // 字符串不相等，但是当前数组的字符串可能与另一个数组的前一个字符串相等
        // 例如 abca 和acab
        // a b c a
        // a c a b
        // 最后两个字符（a,b不相等），但是第一个数组最后一个a与第二个数组倒数第二个a相等，
        // 所以此时  dp[i][j] = dp[i][j-1] （倒数第二个a存的重复序列长度）
        // 同样dp[i][j] 也可能等于 dp[i-][j]，两者取最大值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[arr1.length][arr2.length];
}
// @lc code=end
